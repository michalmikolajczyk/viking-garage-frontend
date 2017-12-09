import * as React from 'react';
import { ReactElement } from '@types/react';
import * as _ from 'lodash';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import {
  IDate,
  IType,
  TDistance,
  ILocation,
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import muiThemeVG from '../muiThemeVG';
import * as api from './api';
import NetworkError from '../Dialogs/NetworkError';
import Footer from '../Footer';
const DEFAULT_LIMIT = process.env.VG_LIMIT || 8;

interface ContainerState {
  listBali?: [object];
  list: [object];
  last: boolean;
  empty: boolean;
  offset: number;
  loading: boolean;
  networkErr: boolean;
  filters: IFiltersValue;
}

interface ContainerProps {
  children: ReactElement<any>;
}

export default class Container extends React.Component<ContainerProps, ContainerState> {
  static contextTypes = { data: React.PropTypes.object };
  limit: number;
  muiTheme: object;

  constructor(props, context) {
    super(props);
    this.limit = parseInt(_.get(context, 'data.vgLimit', DEFAULT_LIMIT), 10);
    this.state = {
      list: _.get(context, 'data.offers[0].data', [{}, {}]),
      listBali: _.get(context, 'data.offers[1].data', [{}, {}]),
      last: false,
      empty: false,
      offset: 0,
      loading: !_.has(context, 'data.offers'),
      networkErr: false,
      filters: {
        date: null,
        distance: null,
        location: null,
        type: null,
      },
    };
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : _.get(this.context, 'data.userAgent', 'all');
    this.muiTheme = getMuiTheme({ ...muiThemeVG, userAgent });
  }

  // componentDidMount() { return this.update(); }

  // forceUpdate() is passed to AppBar to rerender the application in case of changing language or currency
  // check out ./i18n/LanguageSelection and ./i18n/CurrencySelection
  refresh = () => this.forceUpdate();

  update = () => {
    const promises = [];
    if (_.isArray(this.state.listBali)) {
      promises.push(api.get(this.state.filters, this.state.offset, 'Poland'));
      promises.push(api.get(this.state.filters, this.state.offset, 'Indonesia'));
    } else {
      promises.push(api.get(this.state.filters, this.state.offset));
    }
    
    return Promise.all(promises)
      .then((res) => {
        // if (res[0]['err'] || (promises.length > 1 && res[1]['err'])) return this.setState({ networkErr: true });
        const list = this.state.offset === 0 ? res[0]['data'] : [...this.state.list, ...res[0]['data']];
        const listBali = res[1] && (this.state.offset === 0 ? res[1]['data'] : [...this.state.listBali, ...res[1]['data']]);

        return this.setState({
          list,
          listBali: listBali || null,
          last: res[0]['data'].length < this.limit,
          empty: res[0]['empty'],
          offset: res[0]['offset'],
          loading: false,
        });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  closeNetworkErr = () => this.setState({ networkErr: false });

  // filters callbacks
  loadMore = () => this.setState({ offset: this.state.offset + this.limit }, this.update);

  filtersFuncs: IFiltersFuncs = {
    typeFilter: (type: IType) => this.setState({ filters: { ...this.state.filters, type }, offset: 0, listBali: null }, this.update),
    dateFilter: (date: IDate) => this.setState({ filters: { ...this.state.filters, date: { ...this.state.filters.date, ...date } }, offset: 0, listBali: null }, this.update),
    distanceFilter: (distance: TDistance) => this.setState({ filters: { ...this.state.filters, distance }, offset: 0, listBali: null }, this.update),
    locationFilter: (location: ILocation) => this.setState({ filters: { ...this.state.filters, location }, offset: 0, listBali: null }, this.update),
  };

  resetSearch = () => {
    return this.setState({
      filters: {
        date: null,
        distance: null,
        location: null,
        type: null,
      },
      offset: 0,
      list: _.get(this.context, 'data.offers[0].data', [{}, {}]),
      listBali: _.get(this.context, 'data.offers[1].data', [{}, {}]),
    }, this.update);
  }

  render() {
    const { refresh, filtersFuncs, loadMore, resetSearch } = this;
    const props = {
      ...this.state,
      refresh,
      loadMore,
      filtersFuncs,
      filtersValue: this.state.filters,
      resetSearch,
    };
    const childrenWithProps = React.cloneElement(this.props.children, props);

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <div className="V5G5">{childrenWithProps}</div>
          <Footer />
          <NetworkError
            open={this.state.networkErr}
            close={this.closeNetworkErr}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

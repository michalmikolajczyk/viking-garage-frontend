import * as React from 'react';
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
const DEFAULT_LIMIT = 8;

interface ContainerState {
  list: [object];
  last: boolean;
  empty: boolean;
  offset: number;
  loading: boolean;
  networkErr: boolean;
  filters: IFiltersValue;
}

export default class Container extends React.Component<any, ContainerState> {
  static contextTypes = { data: React.PropTypes.object };
  limit: number;
  muiTheme: object;

  constructor(props, context) {
    super(props);
    this.limit = parseInt(_.get(context, 'data.vgLimit', DEFAULT_LIMIT), 10);
    this.state = {
      list: _.get(context, 'data.offers.data', [{}, {}]),
      last: false,
      empty: false,
      offset: 0,
      loading: !_.has(context, 'data.offers'),
      networkErr: false,
      filters: {
        date: null,
        type: null,
        distance: null,
        location: null,
      },
    };
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : _.get(this.context, 'data.userAgent', 'all');
    this.muiTheme = getMuiTheme({ ...muiThemeVG, userAgent });
  }

  componentDidMount() { this.update(); }

  update = () => {
    api.get(this.state.filters, this.state.offset)
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        const list = this.state.offset === 0 ? res['data'] : [...this.state.list, ...res['data']];
        this.setState({
          list,
          last: res['data'].length < this.limit,
          empty: res['empty'],
          offset: res['offset'],
          loading: false,
        });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  closeNetworkErr = () => this.setState({ networkErr: false });

  // filters callbacks
  loadMore = () => this.setState({ offset: this.state.offset + this.limit }, this.update);

  filtersFuncs: IFiltersFuncs = {
    typeFilter: (type: IType) => this.setState({ filters: { ...this.state.filters, type }, offset: 0 }, this.update),
    dateFilter: (date: IDate) => this.setState({ filters: { ...this.state.filters, date: { ...this.state.filters.date, ...date } }, offset: 0 }, this.update),
    distanceFilter: (distance: TDistance) => this.setState({ filters: { ...this.state.filters, distance }, offset: 0 }, this.update),
    locationFilter: (location: ILocation) => this.setState({ filters: { ...this.state.filters, location }, offset: 0 }, this.update),
  };

  render() {
    const { filtersFuncs, loadMore } = this;
    const props = {
      ...this.state,
      loadMore,
      filtersFuncs,
      filtersValue: this.state.filters,
    };
    const childrenWithProps = React.cloneElement(this.props.children, props);

    // forceUpdate() is pass to AppBar to rerender application in case of changing language or currency
    // check out ./i18n/LanguageSelection and ./i18n/CurrencySelection
    const children = React.cloneElement(this.props.children, { refresh: () => this.forceUpdate() });

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          {childrenWithProps}
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

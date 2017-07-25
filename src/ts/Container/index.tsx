import * as React from 'react';
import * as _ from 'lodash';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import muiThemeVG from '../muiThemeVG';
import * as api from './api';
import NetworkError from '../Dialogs/NetworkError';
import AppBarVG  from '../AppBarVG';
import Footer from '../Footer';
const defaultLimit = 8;

export default class Container extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object };
  limit: number;
  filters: object;
  muiTheme: object;

  constructor(props, context) {
    super(props);
    this.limit = parseInt(_.get(context, 'data.vgLimit', defaultLimit), 10);
    this.state = {
      list: _.get(context, 'data.offers.data', [{}, {}]),
      loading: !_.has(context, 'data.offers'),
      offset: 0,
      empty: false,
      last: false,

      date: null,
      type: null,
      distance: null,
      location: null,

      networkErr: false,
    };
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : _.get(this.context, 'data.userAgent', 'all');
    this.muiTheme = getMuiTheme({ ...muiThemeVG, userAgent });
    this.filters = {
      loadMore: this.loadMore,
      typeFilter: this.typeFilter,
      dateFilter: this.dateFilter,
      locationFilter: this.locationFilter,
      distanceFilter: this.distanceFilter,
    };
  }

  componentDidMount() { this.update(); }

  update = () => {
    api.get(this.state)
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
  typeFilter = type => this.setState({ type, offset: 0 }, this.update);
  dateFilter = date => this.setState({ date: { ...this.state.date, ...date }, offset: 0 }, this.update);
  distanceFilter = distance => this.setState({ distance, offset: 0 }, this.update);
  locationFilter = location => this.setState({ location, offset: 0 }, this.update);

  render() {
    const props = { ...this.state, ...this.filters };
    const childrenWithProps = React.cloneElement(this.props.children, props);

    // forceUpdate() is pass to AppBar to rerender application in case of changing language or currency
    // check out ./i18n/LanguageSelection and ./i18n/CurrencySelection
    const children = React.cloneElement(this.props.children, { refresh: () => this.forceUpdate() });

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <AppBarVG {...props} />
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

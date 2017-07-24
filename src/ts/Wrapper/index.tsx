import * as React from 'react';
import * as _ from 'lodash';
import * as api from './api';
import i from '../i18n';
import NetworkError from '../Dialogs/NetworkError';
import AppBarVG  from '../AppBarVG';
import Footer from '../Footer';
import debug from 'debug';
const log = debug('app:Wrapper');

export default class Wrapper extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object };
  limit: number;

  constructor(props, context) {
    super(props, context);
    this.limit = parseInt(_.get(context, 'data.vgLimit', 8), 10);
    this.state = {
      list: _.get(context, 'data.offers.data', [{}, {}]),
      load: !_.has(context, 'data.offers'),
      offset: 0,
      empty: false,
      last: false,

      location: null,
      distance: null,
      type: null,
      date: null,

      networkErr: false,
    };
  }

  componentDidMount() {
    this.update();
    // this.setLocation();
  }

  update = () => {
    api.get(this.state)
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        const list = this.state.offset === 0 ? res['data'] : [...this.state.list, ...res['data']];
        this.setState({
          list,
          offset: res['offset'],
          empty: res['empty'],
          last: res['data'].length < this.limit,
          load: false,
        });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  setLocation = () => {
    if (typeof navigator !== 'undefined' && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.setState({
            location: {
              lat: pos.coords.latitude.toFixed(6),
              lng: pos.coords.longitude.toFixed(6),
            },
          });
        },
        () => log('location could not be determined'),
      );
    }
  }

  locationFilter = location => this.setState({ location, offset: 0 }, this.update);

  distanceFilter = distance => this.setState({ distance, offset: 0 }, this.update);

  typeFilter = type => this.setState({ type, offset: 0 }, this.update);

  dateFilter = date => this.setState({ date: { ...this.state.date, ...date }, offset: 0 }, this.update);

  loadMore = () => this.setState({ offset: this.state.offset + this.limit }, this.update);

  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    const {
      last,
      empty,
    } = this.state;

    const ifLoadMore = !last && !empty;

    const filters = {
      loadMore: this.loadMore,
      typeFilter: this.typeFilter,
      dateFilter: this.dateFilter,
      locationFilter: this.locationFilter,
      distanceFilter: this.distanceFilter,
    };

    const props = { ifLoadMore, ...this.state, ...filters };

    const childrenWithProps = React.cloneElement(this.props.children, props);

    return (
      <div>
        <AppBarVG {...props} />
        {childrenWithProps}
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
        <Footer />
      </div>
    );
  }
}

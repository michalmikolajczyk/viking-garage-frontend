import * as React from 'react';
import * as _ from 'lodash';
import Header from '../Header';
import SearchPure from '../Search/SearchPure';
import OffersList from './OffersList';
import NetworkError from '../Dialogs/NetworkError';
import * as api from './api';
import i from '../i18n';
import debug from 'debug';
const log = debug('app:Offers');
import { offers } from '../Detail/mockup';
import { default as AppBarVG } from '../AppBar';

export default class Offers extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object }

  constructor(props, context) {
    super(props, context);
    this.state = {
      list: _.get(context, 'data.offers.data', [{}, {}]),
      load: !_.has(context, 'data.offers'),
      offset: 0,
      empty: false,

      location: null,
      distance: null,
      type: null,
      date: null,

      networkErr: false,
    };
  }

  componentDidMount() {
    this.setLocation();
    this.update();
  }

  update = () => {
    api.get(this.state)
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        this.setState({
          list: res['data'],
          offset: res['offset'],
          empty: res['empty'],
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

  locationFilter = (location) => this.setState({ location }, this.update);

  distanceFilter = (distance) => this.setState({ distance }, this.update);

  typeFilter = (type) => this.setState({ type }, this.update);

  dateFilter = (date) => this.setState({ date }, this.update);

  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    const filters = {
      locationFilter: this.locationFilter,
      distanceFilter: this.distanceFilter,
      typeFilter: this.typeFilter,
      dateFilter: this.dateFilter,
      location: this.state.location,
    };

    return (
      <div>
        <AppBarVG {...filters}/>
        <Header />
        <div className="mobile-hid">
          <SearchPure {...filters} />
        </div>
        <OffersList
          list={this.state.list}
          load={this.state.load}
          location={this.state.location}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

import * as React from 'react';
import * as _ from 'lodash';
import Header from '../Header';
import Search from '../Search';
import OffersList from './OffersList';
import NetworkError from '../Dialogs/NetworkError';
import * as api from './api';
import i from '../i18n';
import debug from 'debug';
const log = debug('app:Offers');
import { offers } from '../Detail/mockup';

export default class Offers extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object }

  constructor(props, context) {
    super(props, context);
    this.state = {
      list: _.isEmpty(context.data.offers) ? [{},{}] : context.data.offers,
      load: _.isEmpty(context.data.offers),
      position: null,
      networkErr: false,
    };
  }

  componentDidMount() {
    this.loadMore();
    this.setPosition();
  }

  loadMore = () => {
    api.get()
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        this.setState({
          list: res,
          load: false,
        });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  setPosition = () => {
    if (typeof navigator !== 'undefined' && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.setState({
            position: {
              latitude: pos.coords.latitude.toFixed(6),
              longitude: pos.coords.longitude.toFixed(6),
            },
          });
        },
        () => log('Position could not be determined'),
      );
    }
  }

  locationFilter(filter) { log('change filter location', filter); }

  selectFilter(filter) { log('change filter select', filter); }

  rangeFilter(filter) { log('change filter range', filter); }

  dateFilter(filter) { log('change filter date', filter); }

  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    return (
      <div>
        <Header />
        <Search
          locationFilter={this.locationFilter}
          selectFilter={this.selectFilter}
          rangeFilter={this.rangeFilter}
          dateFilter={this.dateFilter}
        />
        <OffersList
          list={this.state.list}
          load={this.state.load}
          position={this.state.position}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

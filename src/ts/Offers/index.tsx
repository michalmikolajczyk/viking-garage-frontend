import * as React from 'react';
import * as _ from 'lodash';
import Header from '../Header';
import Search from '../Search';
import Raido from '../Raido';
import OffersList from './OffersList';
import * as api from './api';
import debug from 'debug';
import i from '../i18n';
const log = debug('app:Offers');
import { offers } from '../Detail/mockup';

export default class Offers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      position: null,
    };
  }

  componentDidMount() {
    this.loadMore();
    this.setPosition();
  }

  loadMore = () => {
    this.setState({ loading: true });
    api.get()
      .then((res) => {
        if (res['err']) {
          return this.setState({
            data: _.map(offers, i => i),
            loading: false,
          });
        }
        this.setState({
          data: res,
          loading: false,
        });
      })
      .catch((err) => {
        log(`Get request error ${err}`);
        this.setState({
          data: _.map(offers, i => i),
          loading: false,
        });
      });
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

  render() {
   const body = this.state.loading
    ? (<div className="loading"><Raido /></div>)
    : (<OffersList
        data={this.state.data}
        loading={this.state.loading}
        loadMore={this.loadMore}
        position={this.state.position}
      />);

    return (
      <div>
        <Header />
        <Search
          locationFilter={this.locationFilter}
          selectFilter={this.selectFilter}
          rangeFilter={this.rangeFilter}
          dateFilter={this.dateFilter}
        />
        {body}
      </div>
    );
  }
}

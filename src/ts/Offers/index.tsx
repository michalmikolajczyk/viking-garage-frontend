import * as React from 'react';
import * as _ from 'lodash';
import Container from '../Container';
import Search from '../Search';
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
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
    this.setPosition();
  }

  loadMore() {
    this.setState({ loading: true });
    api.get()
      .then(res => {
        if (res['err']) throw res['msg'];
        this.setState({
          data: res,
          loading: false,
        });
      })
      .catch(err => {
        log(`Get request error ${err}`);
        this.setState({
          data: _.map(offers, i => i),
          loading: false,
        })
      })
  }

  setPosition() {
    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        (pos) => this.setState({ position: {
            latitude: pos.coords.latitude.toFixed(6),
            longitude: pos.coords.longitude.toFixed(6),
          }
        }),
        () => log('Position could not be determined'),
        { enableHighAccuracy: false },
      );
    }
  }

  locationFilter(filter) { log('change filter location', filter); }

  selectFilter(filter) { log('change filter select', filter); }

  dateFilter(filter) { log('change filter date', filter); }

  render() {
    return (
      <Container>
        <Search
          selectItems={getSelectItems()}
          locationFilter={this.locationFilter}
          selectFilter={this.selectFilter}
          dateFilter={this.dateFilter}
        />
        <OffersList
          data={this.state.data}
          loading={this.state.loading}
          loadMore={this.loadMore}
          position={this.state.position}
        />
      </Container>
    );
  }
}

const getSelectItems = () => ([
  {
    group: i('Motorcycle'),
    value: [
      'Off-road',
      'Street',
      'Dual-sport',
      i('Scooter'),
      i('Electric'),
      i('Small (children)'),
    ],
  },
  {
    group: i('Mechanic'),
    value: [
      'Off-road & dual-sport',
      'Street',
      i('Electric'),
      i('Scooter'),
    ],
  },
  {
    group: i('Coach / Instructor'),
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: i('Guide'),
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: i('Equipment'),
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: i('Parts'),
    value: [
      'Dirtbikes',
      'Streetbikes',
    ],
  },
  {
    group: i('Circuits'),
    value: [
      'Motocross',
      'Enduro',
      'Race tracks',
    ],
  },
  {
    group: i('Other'),
    value: [
      i('Shops'),
      i('Events'),
      i('Clubs'),
    ],
  },
]);

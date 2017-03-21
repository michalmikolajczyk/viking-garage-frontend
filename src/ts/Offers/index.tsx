import * as React from 'react';
import Container from '../Container';
import Search from '../Search';
import OffersList from './OffersList';
import debug from 'debug';
import { offers } from '../Detail/mockup';
import * as _ from 'lodash';
const log = debug('app:Offers');

export default class Offers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: _.map(offers, i => i),
      loading: true,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 1500);
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
        />
      </Container>
    );
  }
}

const getSelectItems = () => ([
  {
    group: 'Motorcycle',
    value: [
      'Off-road',
      'Street',
      'Dual-sport',
      'Scooter',
      'Electric',
      'Small (children)',
    ],
  },
  {
    group: 'Mechanic',
    value: [
      'Off-road & dual-sport',
      'Street',
      'Electric',
      'Scooter',
    ],
  },
  {
    group: 'Coach / Instructor',
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: 'Guide',
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: 'Equipment',
    value: [
      'Off-road',
      'Street',
    ],
  },
  {
    group: 'Parts',
    value: [
      'Dirtbikes',
      'Streetbikes',
    ],
  },
  {
    group: 'Circuits',
    value: [
      'Motocross',
      'Enduro',
      'Race tracks',
    ],
  },
  {
    group: 'Other',
    value: [
      'Shops',
      'Events',
      'Clubs',
    ],
  },
]);

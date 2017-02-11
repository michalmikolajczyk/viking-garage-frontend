import * as React from 'react';
import Container from '../Container';
import Search from '../Search';
import OffersList from './OffersList';
import debug from 'debug';
var log = debug('app:Offers');

const request = (url) => (
  new Promise((res, rej) => {
    const data = [];
    const rand = Math.random();
    for (let i = 0; i < 4; i++) {
      data.push({
        title: 'KTM 250SX 2017',
        price: '$55$/d',
        approx: '3 km away',
        img: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CRF-450R-Motocross-Bike-PNG-Image.png',
        key: rand + i,
      })
    }
    setTimeout(() => res(data), 1000);
  })
)

const getSelectItems = () => ([
  {
    group: 'Motorcycle',
    value: [
      'Off-road',
      'Street',
      'Dual-sport',
      'Scooter',
      'Electric',
      'Small (children)'
    ]
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

export default class Offers extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  public loadMore() {
    this.setState({loading: true});
    request('url')
    .then(res => {
      this.setState({
        data: this.state.data.concat(res),
        loading: false,
      })
    })
  }

  public locationFilter(filter) { log('change filter location', filter) }

  public selectFilter(filter) { log('change filter select', filter) }

  public dateFilter(filter) { log('change filter date', filter) }

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

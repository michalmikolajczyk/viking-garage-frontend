import * as React from 'react';
import { browserHistory } from 'react-router';
import Container from '../Container';
import Search from '../Search';
import OffersList from './OffersList';
import NetworkError from '../Dialogs/NetworkError';
import VerifyError from './VerifyError';
import VerifySuccess from './VerifySuccess';
import { verify } from './api';
import debug from 'debug';
import * as items from '../Detail/mockup';
import * as _ from 'lodash';
const log = debug('app:Offers');

export default class Offers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: _.map(items, i => i),
      loading: true,
      networkErr: false,
      verifyError: false,
      verifySuccess: false,
    };
    this.loadMore = this.loadMore.bind(this);
    this.verifyAccount = this.verifyAccount.bind(this);
  }

  componentDidMount() {
    this.loadMore();
    if (this.props.params.token) {
      this.verifyAccount();
    }
  }

  verifyAccount() {
    const token = this.props.params.token;
    verify({ token })
    .then((res) => {
      if (res['err']) {
        this.setState({ verifyError: true });
      } else {
        const token = res['token'];
        const user = res['user'];
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ verifySuccess: true });
      }
    })
    .catch(err => this.setState({ networkErr: true }));
  }

  public loadMore() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  public locationFilter(filter) { log('change filter location', filter); }

  public selectFilter(filter) { log('change filter select', filter); }

  public dateFilter(filter) { log('change filter date', filter); }

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
        <VerifyError
          open={this.state.verifyError}
          close={() => this.setState({ verifyError: false })}
        />
        <VerifySuccess
          open={this.state.verifySuccess}
          close={() => {this.setState({ verifySuccess: false }); browserHistory.push('/'); }}
        />
        <NetworkError
          open={this.state.networkErr}
          close={() => this.setState({ networkErr: false })}
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

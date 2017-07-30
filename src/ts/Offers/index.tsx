import * as React from 'react';
import * as _ from 'lodash';
import Header from '../Header';
import Groupon from '../Groupon';
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
  static contextTypes = { data: React.PropTypes.object };
  limit: number;

  constructor(props, context) {
    super(props, context);
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
    this.limit = parseInt(_.get(context, 'data.vgLimit', 8), 10);
  }

  componentDidMount() {
    this.update();
    this.setLocation();
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
          }, this.update);
        },
        () => log('location could not be determined'),
      );
    }
  }

  locationFilter = location => this.setState({ location, offset: 0 }, this.update);

  distanceFilter = distance => this.setState({ distance, offset: 0 }, this.update);

  typeFilter = type => this.setState({ type, offset: 0 }, this.update);

  dateFilter = date => this.setState({ date, offset: 0 }, this.update);

  closeNetworkErr = () => this.setState({ networkErr: false });

  loadMore = () => this.setState({ offset: this.state.offset + this.limit }, this.update);

  render() {
    const {
      list,
      load,
      last,
      date,
      empty,
      location,
    } = this.state;

    const filters = {
      location,
      typeFilter: this.typeFilter,
      dateFilter: this.dateFilter,
      locationFilter: this.locationFilter,
      distanceFilter: this.distanceFilter,
    };

    const emptyMsg = empty && (<div className="offers-empty">{i('There is no offers matching to your filters!')}</div>);
    const loadMore = !last && !empty && (<button onClick={this.loadMore} className="loadmore">{i('Load more')}</button>);

    return (
      <div>
        <AppBarVG {...filters} refresh={this.props.refresh}/>
        <Header />
        <Groupon />
        <div className="mobile-hid">
          <SearchPure {...filters} />
        </div>
        {emptyMsg}
        <OffersList
          list={list}
          load={load}
          date={date}
          location={location}
        />
        {loadMore}
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

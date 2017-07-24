import * as React from 'react';
import * as _ from 'lodash';
import Header from '../Header';
import Groupon from '../Groupon';
import SearchPure from '../Search/SearchPure';
import OffersList from './OffersList';
import * as api from './api';
import i from '../i18n';

interface OffersProps {
  list: [object];
  load: boolean;
  date: any;
  type: any;
  location: any;
  distance: any;
  empty: boolean;
  emptyMsg: string;

  ifLoadMore: boolean;
  loadMore: () => void;
  typeFilter: (type: any) => void;
  dateFilter: (date: any) => void;
  locationFilter: (location: any) => void;
  distanceFilter: (distance: any) => void;
};

export default function Offers(props: OffersProps) {
  const {
    list,
    load,
    date,
    empty,
    location,
    ifLoadMore,
    loadMore,
  } = props;

  const emptyMsg = empty && (<div className="offers-empty">{i('There is no offers matching to your filters!')}</div>);
  const loadMoreBtn = ifLoadMore && (<button onClick={loadMore} className="loadmore">{i('Load more')}</button>);

  return (
    <div>
      <Header />
      <Groupon />
      <div className="mobile-hid">
        <SearchPure {...props} />
      </div>
      {emptyMsg}
      <OffersList
        date={date}
        list={list}
        load={load}
        location={location}
      />
      {loadMoreBtn}
    </div>
  );
}

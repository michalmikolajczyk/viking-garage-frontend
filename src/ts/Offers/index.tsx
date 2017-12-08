import * as React from 'react';
import * as _ from 'lodash';
import {
  IDate,
  IType,
  TDistance,
  ILocation,
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import AppBarVG from '../AppBarVG';
import Header from '../Header';
import SearchPure from '../Search/SearchPure';
import OffersList from './OffersList';
import i18n from '../i18n';
const i = i18n;

interface OffersProps {
  listBali?: [object];
  list: [object];
  last: boolean;
  empty: boolean;
  loading: boolean;

  filtersFuncs: IFiltersFuncs;
  filtersValue: IFiltersValue;

  refresh: () => void;
  loadMore: () => void;
  resetSearch: () => void;
};

export default function Offers(props: OffersProps) {
  const {
    list,
    listBali,
    last,
    empty,
    loading,
    loadMore,
    filtersValue,
  } = props;

  const emptyMsg = empty && (<div className="offers-empty">{i('There is no offers matching to your filters!')}</div>);
  const loadMoreBtn = !last && (<button onClick={loadMore} className="loadmore">{i('Load more')}</button>);

  // note to future self:
  // consider making multiple OffersList containers
  // one for every market
  return (
    <div>
      <AppBarVG {...props} />
      <Header />
      <div className="offers-extra-orbital-wrapper mobile-hid"><div className="offers-outer-wrapper">
        <SearchPure {...props} />
      </div></div>
      {emptyMsg}
      <OffersList
        date={filtersValue.date}
        list={list}
        listBali={listBali}
        loading={loading}
        location={filtersValue.location}
      />
      {loadMoreBtn}
    </div>
  );
}

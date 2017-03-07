import * as React from 'react';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import Offer from './Offer';

export default function OffersList(props) {

  const {
    data,
    loadMore,
    loading,
  } = props;

  const loader = loading ? (
      <CircularProgress size={60} thickness={7} color="white" />
    ) : (
      <button className="loadmore" onClick={loadMore}>
        Load more results
      </button>
    );

  const mappedItems = data.map(item => <Offer data={item} key={item.url} />);

  return (
    <div className="offers-wrap">
      <div className="offers cont">
        {mappedItems}
      </div>
      <div className="load">
        {loader}
      </div>
    </div>
  );
}

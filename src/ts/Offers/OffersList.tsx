import * as React from 'react';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import Offer from './Offer';

export default function OffersList(props) {
  const {
    data,
    loading,
    position,
  } = props;

  const list = data.map((item, key) => <Offer data={item} key={key} position={position}/>);

  return (
    <div className={`offers ${loading ? 'loading' : ''}`}>
      {list}
    </div>
  );
}

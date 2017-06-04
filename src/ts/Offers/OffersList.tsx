import * as React from 'react';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import Offer from './Offer';

export default function OffersList(props) {
  const {
    list,
    load,
    position,
  } = props;

  const items = list.map((item, key) => <Offer data={item} key={key} position={position}/>);

  return (
    <div className={`offers ${load ? 'load' : ''}`}>
      {items}
    </div>
  );
}

import * as React from 'react';
import Accordion from '../Accordion';
import Comment from '../Comment';
import HeaderVG from './HeaderVG';
import ListVG from './ListVG';
import parser from '../helpers/parser';
import debug from 'debug';
const log = debug('app:Offer');

export default function Offer({ offer }) {
  const { motorcycles } = offer;
  const general = parser('general', motorcycles[0]);
  return (
    <div className="detail-offer">
      <HeaderVG offer={offer} />
      <Accordion offer={general} open={true} />
      <ListVG offer={offer} />
    </div>
  );
}


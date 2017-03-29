import * as React from 'react';
import Accordion from '../Accordion';
import Comments from './Comments';
import HeaderVG from './HeaderVG';
import ListVG from './ListVG';
import parser from '../helpers/parser';
import debug from 'debug';
const log = debug('app:Offer');

export default function Offer({ offer }) {
  const { detail } = offer;
  const items = parser('general', detail);
  return (
    <div className="detail-offer">
      <HeaderVG offer={offer} />
      <Accordion items={items} open={true} />
      <Comments />
      <ListVG offer={offer} />
    </div>
  );
}


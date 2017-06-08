import * as React from 'react';
import * as _ from 'lodash';
import Accordion from '../Accordion';
import Comment from '../Comment';
import HeaderVG from './HeaderVG';
import ListVG from './ListVG';
import parser from '../helpers/parser';
import debug from 'debug';
const log = debug('app:Offer');

export default function Offer({ offer }) {
  const motorcycles = _.get(offer, 'motorcycles[0]');
  const general = parser('general', motorcycles);
  return (
    <div className="detail-offer">
      <HeaderVG offer={offer} />
      <Accordion offer={general} open={true} />
      <ListVG offer={offer} />
    </div>
  );
}

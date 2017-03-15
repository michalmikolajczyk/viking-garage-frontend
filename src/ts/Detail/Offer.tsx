import * as React from 'react';
import Accordion from '../Accordion';
import Comments from './Comments';
import Header from './Header';
import List from './List';

export default function DetailOffer({ offer }) {
  const { general } = offer;
  return (
    <div className="detail-offer">
      <Header offer={offer} />
      <Accordion open={true} items={general} />
      <Comments />
      <List offer={offer} />
    </div>
  );
}

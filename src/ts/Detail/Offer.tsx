import * as React from 'react';
import Accordion from '../Accordion';
import Comments from './Comments';
import HeaderVG from './HeaderVG';
import List from './List';

export default function Offer({ offer }) {
  return (
    <div className="detail-offer">
      <HeaderVG offer={offer} />
    </div>
  );
}

      // <Accordion open={true} items={general} />
      // <Comments />
      // <List offer={offer} />

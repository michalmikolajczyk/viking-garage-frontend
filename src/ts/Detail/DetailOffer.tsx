import * as React from 'react';
import Accordion from './Accordion';
import Comments from './Comments';
import DetailHeader from './DetailHeader';
import DetailList from './DetailList';

export default function DetailOffer(props) {
  const { offer } = props;
  const { general } = offer;
  return (
    <div className="detail-offer">
      <DetailHeader offer={offer} />
      <Accordion open={true} items={general} />
      <Comments />
      <DetailList offer={offer} />
    </div>
  );
}

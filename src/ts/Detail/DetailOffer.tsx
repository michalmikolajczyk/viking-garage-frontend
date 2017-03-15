import * as React from 'react';
import Comments from './Comments';
import DetailHeader from './DetailHeader';
import DetailList from './DetailList';

export default function DetailOffer(props) {
  const { offer } = props;
  return (
    <div className="detail-offer">
      <DetailHeader offer={offer} />
      <Comments />
      <DetailList offer={offer} />
    </div>
  );
}

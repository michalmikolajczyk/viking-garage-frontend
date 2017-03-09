import * as React from 'react';
import Comments from './Comments';
import DetailHeader from './DetailHeader';
import DetailTable from './DetailTable';

export default function DetailOffer(props) {
  const { offer } = props;
  return (
    <div className="detail-offer">
      <DetailHeader offer={offer} />
      <DetailTable offer={offer} />
      <Comments />
    </div>
  );
}

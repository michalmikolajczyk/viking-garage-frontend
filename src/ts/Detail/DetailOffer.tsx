import * as React from 'react';
import Comments from './Comments';
import DetailTable from './DetailTable';

export default function DetailOffer(props) {
  const { offer } = props;
  return (
    <div className="detail-offer">
      <div className="image" style={{ backgroundImage: `url(${offer.images.main})` }}>
      </div>
      <div className="title">{offer.title}</div>
      <div className="owner">
        <div className="picture" style={{ backgroundImage: `url(${offer.owner.picture})` }} />
        <div className="owner-details">
          <div className="fullname">{offer.owner.fullname}</div>
          <div className="location">
            {`${offer.location.address.city}, ${offer.location.address.country}`}
          </div>
        </div>
      </div>
      <div className="text">{offer.description}</div>
      <DetailTable offer={offer} />
      <Comments />
    </div>
  );
}

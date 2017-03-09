import * as React from 'react';

export default function DetailHeader(props) {
  const { offer } = props;
  return (
    <div>
      <div
        className="image"
        style={{ backgroundImage: `url(${offer.images.main})` }}
      />
      <div className="title">
        {offer.title}
      </div>
      <div className="owner">
        <div
          className="picture"
          style={{ backgroundImage: `url(${offer.owner.picture})` }}
        />
        <div className="owner-details">
          <div className="fullname">
            {offer.owner.fullname}
          </div>
          <div className="location">
            {`${offer.location.address.city}, ${offer.location.address.country}`}
          </div>
        </div>
      </div>
      <div className="text">
        {offer.description}
      </div>
    </div>
  );
}

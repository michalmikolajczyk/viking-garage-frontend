import * as React from 'react';

export default function Header({ offer }) {
  const { offerer } = offer;
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
          style={{ backgroundImage: `url(${offerer.picture})` }}
        />
        <div className="owner-details">
          <div className="fullname">
            {offerer.fullname}
          </div>
          <div className="location">
            {`${offerer.location.city}, ${offerer.location.country}`}
          </div>
        </div>
      </div>
      <div className="text">
        {offer.description}
      </div>
    </div>
  );
}

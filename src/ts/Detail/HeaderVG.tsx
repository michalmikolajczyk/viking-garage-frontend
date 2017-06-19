import * as React from 'react';
import Card from '../Offers/Offer';

export default function HeaderVG({ offer }) {
  if (!offer) return null;
  const {
    title,
    brief,
    image,
    offerer,
  } = offer;

  const renderImage = image && <div className="image mobile-hid" style={{ backgroundImage: `url(${image})` }}/>;

  return (
    <div className={`headervg ${title ? '' : 'load'}`}>
      <div className="mobile-tablet-only">
        <Card
          data={offer}
          disable={true}
          location={false}
        />
      </div>
      <div className="headervg-desktop mobile-tablet-hid">
        {renderImage}
        <div className="title">
          {title}
        </div>
        <Offerer offerer={offerer}/>
        <div className="text">
          {brief}
        </div>
      </div>
    </div>
  );
}

function Offerer({ offerer }) {
  if (!offerer) return null;
  const {
    name,
    image,
    city,
    country,
  } = offerer;

  return (
    <div className="owner">
      <div
        className="picture"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="owner-details">
        <div className="fullname">
          {name}
        </div>
        <div className="location">
          {`${city}, ${country}`}
        </div>
      </div>
    </div>
  );
}

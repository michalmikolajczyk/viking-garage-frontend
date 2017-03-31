import * as React from 'react';
import * as geolib from 'geolib';
import { Link } from 'react-router';

export default function Offer({ data, position }) {
  const {
    id,
    url,
    title,
    coord,
    image,
    price,
  } = data;
  let distance = '';
  if (position) {
    const coordinates = { latitude: coord.coordinates[0], longitude: coord.coordinates[1] };
    distance = (geolib.getDistance(position, coordinates) / 1000).toFixed(2);
  }
  return (
    <Link to={`offer/${id}/${url}`} className="offer-btn-link">
      <div className="card">
        <div style={{ backgroundImage: `url(${image})` }} className="image"/>
        <div className="head">
          <div className="descript">
            <div className="title">{title}</div>
            <div className="foot">{`${price} $/day ${distance} km away`}</div>
          </div>
        </div>
      </div>
    </Link>);
}

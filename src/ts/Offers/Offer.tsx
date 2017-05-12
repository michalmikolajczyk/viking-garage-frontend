import * as React from 'react';
import * as geolib from 'geolib';
import { Link } from 'react-router';
import i from '../i18n';

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
    distance = Math.round(geolib.getDistance(position, coordinates) / 1000).toString();
    distance = `, ${i('distance')}: ${distance} km`;
  }
  return (
    <Link to={`offer/${id}/${url}`} className="offer-btn-link">
      <div className="card">
        <div style={{ backgroundImage: `url(${image})` }} className="image"/>
        <div className="head">
          <div className="descript">
            <div className="title">{title}</div>
            <div className="foot">{`${price} $/${i('day')}${distance}`}</div>
          </div>
        </div>
      </div>
    </Link>);
}

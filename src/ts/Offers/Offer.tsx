import * as React from 'react';
import * as geolib from 'geolib';
import { Link } from 'react-router';
import i from '../i18n';

export default function Offer({ data, location }) {
  const {
    id,
    url,
    title,
    coord,
    image,
    price,
  } = data;

  let distance = '';
  if (location && coord) {
    const coordinates = { latitude: coord.coordinates[0], longitude: coord.coordinates[1] };
    distance = Math.round(geolib.getDistance(location, coordinates) / 1000).toString();
    distance = `, ${i('distance')}: ${distance} km`;
  }

  const renderLink = id ? `offer/${id}/${url}` : '/';

  const renderTitle = title || '';

  const renderPrice = price && <div className="foot">{`${price} $/${i('day')}${distance}`}</div>

  const renderImage = image && <div style={{ backgroundImage: `url(${image})` }} className="image"/>;

  return (
    <Link to={renderLink} className="offer-btn-link">
      <div className="card">
        {renderImage}
        <div className="head">
          <div className="descript">
            <div className="title">{renderTitle}</div>
            {renderPrice}
          </div>
        </div>
      </div>
    </Link>);
}

import * as React from 'react';
import * as fx from 'money';
import { FontIcon } from 'material-ui';
import * as geolib from 'geolib';
import { Link } from 'react-router';
import i from '../i18n';

export default function Offer(props) {
  const {
    data,
    disable,
    location,
  } = props;

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
  const renderPrice = price && `${fx(price).to(i('USD')).toFixed(2)} ${i('USD')}/${i('day')}${distance}`;
  const renderImage = image && { backgroundImage: `url(${image})` };

  return disable ? (
    <div className="card">
      <div style={renderImage} className="image"/>
      <div className="head">
        <div className="title">{renderTitle}</div>
        <div className="foot">{renderPrice}</div>
      </div>
    </div>
  ) : (
    <Link className="card" to={renderLink}>
      <div style={renderImage} className="image"/>
      <div className="head">
        <div className="title">{renderTitle}</div>
        <div className="foot">{renderPrice}</div>
      </div>
    </Link>
  );
}

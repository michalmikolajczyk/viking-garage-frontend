import * as React from 'react';
import * as moment from 'moment';
import * as fx from 'money';
import { FontIcon } from 'material-ui';
import * as geolib from 'geolib';
import { Link } from 'react-router';
import i from '../i18n';
import { renderUnit } from '../helpers/hours';

export default function Offer(props) {
  const {
    data,
    date,
    disable,
    location,
  } = props;

  const {
    id,
    url,
    title,
    city,
    coord,
    image,
    price,
  } = data;

  let distance = '';
  if (location && coord) {
    const coordinates = { latitude: coord.coordinates[0], longitude: coord.coordinates[1] };
    distance = Math.round(geolib.getDistance(location, coordinates) / 1000).toString();
    distance = `${distance} km`;
  }

  const query = date && { start: moment(date.start).unix(), end: moment(date.end).unix() };
  const renderLink = id ? { pathname: `offer/${id}/${url}`, query } : '/';
  const renderTitle = title || '';
  const renderPrice = price && `${renderUnit(data)}`;
  const renderImage = image && { backgroundImage: `url(${image})` };
  const renderLocation = city ? `${city}` : '';
  const renderDistance = (city && distance) ? `, ${distance}` : (distance ? `${i('Distance')}: ${distance}` : '');

  return disable ? (
    <div className="card">
      <div style={renderImage} className="image"/>
      <div className="head">
        <div className="title">{renderTitle}</div>
        <div className="foot">{renderPrice}</div>
        <div className="foot">{renderLocation}</div>
      </div>
    </div>
  ) : (
    <Link className="card" to={renderLink}>
      <div style={renderImage} className="image"/>
      <div className="head">
        <div className="title">{renderTitle}</div>
        <div className="foot">{renderPrice}</div>
        <div className="foot">{`${renderLocation}${renderDistance}`}</div>
      </div>
    </Link>
  );
}

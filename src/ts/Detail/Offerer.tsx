import * as React from 'react';
import * as moment from 'moment';
import i from '../i18n';
import Header from '../Accordion/Header';

export default function Offerer({ offer }) {
  if (!offer || !offer.offerer) return null;
  const { offerer } = offer;
  const {
    brief,
    city,
    country,
    image,
    name,
    since,
    points,
  } = offerer;
  const sinceStr = moment(since).format('DD MMM YYYY');
  return (
    <div className="accordion">
      <Header head={i('Offerer details')} />
      <div className="offerer">
        <div className="offerer-info">
          <div
            className="picture"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="offerer-main">
            <div>{name}</div>
            <div>{`${city}, ${country}`}</div>
            <div>{`${i('With VG since')} ${sinceStr}`}</div>
          </div>
        </div>
        <div className="offerer-brief">
          {brief}
        </div>
      </div>
    </div>);
}

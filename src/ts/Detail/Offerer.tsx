import * as React from 'react';
import * as moment from 'moment';
import i from '../i18n';
import Header from '../Accordion/Header';

export default function Offerer({ offer }) {
  const { offerer } = offer;
  return (
    <div>
      <Header head={i('Offerer details')} />
      <div className="offerer">
        <div
          className="picture"
          style={{ backgroundImage: `url(${offerer.picture})` }}
        />
        <div className="offerer-info">
          <div className="offerer-main">
            <div>{offerer.fullname}</div>
            <div>{`${offerer.location.city}, ${offerer.location.country}`}</div>
            <div>{`${i('With VG since')} ${moment(offerer.since).format('DD MMM YYYY')}`}</div>
          </div>
          <div className="descript">{offerer.descript}</div>
          <div className="recommend">{`${i('Recommendations')}: ${offerer.recommend}`}</div>
          <button className="message">{i('Send message')}</button>
        </div>
      </div>
    </div>);
}

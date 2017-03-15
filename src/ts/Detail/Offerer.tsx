import * as React from 'react';
import Header from '../Accordion/Header';

export default function Offerer({ offer }) {
  const { offerer } = offer;
  return (
    <div>
      <Header head="Offerer details" />
      <div className="offerer">
        <div
          className="picture"
          style={{ backgroundImage: `url(${offerer.picture})` }}
        />
        <div className="offerer-info">
          <div className="offerer-main">
            <div>{offerer.fullname}</div>
            <div>{`${offerer.location.city}, ${offerer.location.country}`}</div>
            <div>With VG since 31 Dec 1986</div>
          </div>
          <div className="descript">{offerer.descript}</div>
          <div className="recommend">Recommendations: {offerer.recommend}</div>
          <button className="message">Send message</button>
        </div>
      </div>
    </div>);
}

import * as React from 'react';
import Header from '../Accordion/Header';

export default function Offerer({ offer }) {
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
  return (
    <div>
      <Header head="Offerer details" />
      <div className="offerer">
        <div
          className="picture"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="offerer-info">
          <div className="offerer-main">
            <div>{name}</div>
            <div>{`${city}, ${country}`}</div>
            <div>With VG since 31 Dec 1986</div>
          </div>
          <div className="descript">{brief}</div>
          <div className="recommend">Recommendations: {points}</div>
          <button className="message">Send message</button>
        </div>
      </div>
    </div>);
}

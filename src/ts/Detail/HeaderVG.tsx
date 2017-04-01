import * as React from 'react';
import * as _ from 'lodash';

export default function HeaderVG({ offer }) {
  const {
    title,
    brief,
    image,
    offerer,
  } = offer;
  return (
    <div>
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="title">
        {title}
      </div>
      <div className="owner">
        <div
          className="picture"
          style={{ backgroundImage: `url(${offerer.image})` }}
        />
        <div className="owner-details">
          <div className="fullname">
            {offerer.name}
          </div>
          <div className="location">
            {`${offerer.city}, ${offerer.country}`}
          </div>
        </div>
      </div>
      <div className="text">
        {brief}
      </div>
    </div>
  );
}

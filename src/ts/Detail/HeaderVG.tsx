import * as React from 'react';
import { FontIcon } from 'material-ui';

export default function HeaderVG({ offer }) {
  const {
    title,
    brief,
    image,
    offerer,
  } = offer;

  const renderImage = typeof image !== 'undefined'
  ? <div className="image" style={{ backgroundImage: `url(${image})` }}/>
  : <FontIcon className="fa fa-motorcycle"/>

  return (
    <div>
      {renderImage}
      <div className="title">
        {title}
      </div>
      <Offerer offerer={offerer}/>
      <div className="text">
        {brief}
      </div>
    </div>
  );
}

function Offerer({ offerer }) {
  if (typeof offerer === 'undefined') return null;
  const {
    name,
    image,
    city,
    country,
  } = offerer;

  return (
    <div className="owner">
      <div
        className="picture"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="owner-details">
        <div className="fullname">
          {name}
        </div>
        <div className="location">
          {`${city}, ${country}`}
        </div>
      </div>
    </div>
  );
}

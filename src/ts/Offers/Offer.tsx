import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';

export default function Offer(props) {
  const {
    url,
    title,
    coord,
    image,
    price,
  } = props.data;
  return (
    <Link to={`offer/${url}`} className="offer-btn-link">
      <div className="card">
        <div style={{ backgroundImage: `url(${image})` }} className="image"/>
        <div className="head">
          <div className="descript">
            <div className="title">{title}</div>
            <div className="foot">{`${price} $/day, ${coord.coordinates}`}</div>
          </div>
        </div>
      </div>
    </Link>);
}

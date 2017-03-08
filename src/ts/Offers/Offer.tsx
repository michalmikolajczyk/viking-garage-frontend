import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';

export default function Offer(props) {
  const {
    url,
    title,
    approx,
  } = props.data;
  const img = _.get(props, 'data.images.main');
  const price = `${props.data.price.unit.day} $ / day`;

  return (
    <Link to={`offer/${url}`} className="offer-btn-link">
      <div className="card">
        <div style={{ backgroundImage: `url(${img})` }} className="image"/>
        <div className="head">
          <div className="descript">
            <div className="title">{title}</div>
            <div className="foot">{`${price} ${approx}`}</div>
          </div>
        </div>
      </div>
    </Link>);
}

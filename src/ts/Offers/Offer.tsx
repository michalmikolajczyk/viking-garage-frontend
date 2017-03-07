import * as React from 'react';
import { Link } from 'react-router';
import { FontIcon } from 'material-ui';

export default function Offer(props) {
  const {
    url,
    title,
    approx,
  } = props.data;
  const img = props.data.images.main;
  const price = `${props.data.price.unit.day} $ / day`;

  const actionIconButton = url => (
    <div className="offer-btn">
      <Link to={`offer/${url}`} className="offer-btn-link">
        <FontIcon className="material-icons">whatshot</FontIcon>
      </Link>
    </div>);

  return (
    <div className="card">
      <div style={{backgroundImage: `url(${img})`}} className="image"/>
      <div className="head">
        <div className="descript">
          <div className="title">
            {title}
          </div>
          <div className="foot">
            {`${price} ${approx}`}
          </div>
        </div>
        {actionIconButton(url)}
      </div>
    </div>);
}

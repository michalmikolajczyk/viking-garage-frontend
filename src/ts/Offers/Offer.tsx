import * as React from 'react';
import { Link } from 'react-router';
import { FontIcon } from 'material-ui';

export default function Offer(props) {

  const {
    key,
    img,
    title,
    price,
    approx,
  } = props.data;

  const actionIconButton = url => (
    <div className="offer-btn">
      <Link to={url} className="offer-btn-link">
        <FontIcon className="material-icons">
          whatshot
        </FontIcon>
      </Link>
    </div>);

  return (
    <div className="card">
      <img alt={title} src={img} className="image"/>
      <div className="head">
        <div className="descript">
          <div className="title">
            {title}
          </div>
          <div className="foot">
            {`${price}  ${approx}`}
          </div>
        </div>
        {actionIconButton('detail')}
      </div>
    </div>);
}

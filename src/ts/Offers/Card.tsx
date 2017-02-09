import * as React from 'react';
import { Link } from 'react-router';
import { FontIcon } from 'material-ui';

export default function CardOwn(props) {

  const {
    key,
    img,
    title,
    price,
    approx,
  } = props.data;

  const actionIconButton = url => (
    <Link to={url} className="button">
      <FontIcon
        style={{fontSize: 45}}
        color="white"
        hoverColor="#AD000D"
        className='fa fa-fire'/>
    </Link>);

  return (
    <div className="tile">
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

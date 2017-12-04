import * as React from 'react';
import Raido from '../Raido';
import i18n from '../i18n';
const i = i18n;

export default function Header(props) {
  return (
    <div className="header">
      <div className="beauty">
        <div className="figure">
          <img src="http://res.cloudinary.com/hkhuw4b7v/image/upload/q_100/a_180/v1512385573/IMG_2176_latap7.jpg" />
        </div>
        <div className="text">
          <span className="raido-spanner"><span className="replace"><Raido /></span>IDE</span>
          <br />
          {i('better motorcycles')}
          <br />
          {i('from locals')}
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import Raido from '../Raido';
import i18n from '../i18n';
const i = i18n;

export default function Header(props) {
  return (
    <div className="header">
      <div className="beauty">
        <div className="figure">
          <img src="https://res.cloudinary.com/hkhuw4b7v/image/upload/v1512728384/IMG_2540_pts8oc.jpg" />
        </div>
        <h1 className="text heading-one">
          <span className="raido-spanner"><span className="replace"><Raido /></span>ide</span> {i('better motorcycles')}
          <br />
          {i('from locals')}
        </h1>
      </div>
    </div>
  );
}

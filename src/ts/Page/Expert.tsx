import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import i18n from '../i18n';
const i = i18n;

export default function Expert(props) {
  const imageGarage = 'http://res.cloudinary.com/hkhuw4b7v/image/upload/c_scale,w_1680/v1514066587/IMG_1823-kopia_woo7kd.jpg';

  const works1 = 'VIKING GARAGE enables motorcycle experts to offer their services, to everyone interested. ' +
    'If you have a workshop, ride enduro or street and know all the best places, are a champion and train people, ' +
    'sell great equipment – get listed!';
 
  return (
    <div>
      <AppBarVG {...props} />
      <div className="page">
        <div className="page-body">
          <h1 className="title heading-one page-title">{i('Make money on motorcycles')}</h1>
          <img className="image" src={imageGarage} />
          <h2 className="head">{i('How it works')}</h2>
          <p className="text">{i(`${works1}`)}</p>
          <h2 className="head">{i('Put up your offer')}</h2>
          <p className="text">{i('Reach out to us at')} <a href="mailto:ride@vikinggarage.com" target="_blank">expert@vikinggarage.com</a>.</p>
        </div>
      </div>
    </div>
  );
}

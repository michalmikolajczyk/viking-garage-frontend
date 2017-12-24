import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import i18n from '../i18n';
const i = i18n;

export default function Owner(props) {
  const imageGarage = 'http://res.cloudinary.com/hkhuw4b7v/image/upload/c_scale,w_1680/a_0/v1514066582/IMG_2176-kopia_ilpq2g.jpg';

  const works1 = 'VIKING GARAGE provides a way to make money on your motorcycle. You get access to insurance and an escrow payment service. ' +
    'The rental agreement is signed directly between you and the person who wants to rent your motorcycle. You call the price.';
 
  return (
    <div>
      <AppBarVG {...props} />
      <div className="page">
        <div className="page-body">
          <h1 className="title heading-one page-title">{i('Rent out your motorcycle and make money')}</h1>
          <img className="image" src={imageGarage} />
          <h2 className="head">{i('How it works')}</h2>
          <p className="text">{i(`${works1}`)}</p>
          <h2 className="head">{i('Put up your offer')}</h2>
          <p className="text">{i('Reach out to us at')} <a href="mailto:ride@vikinggarage.com" target="_blank">owner@vikinggarage.com</a>.</p>
        </div>
      </div>
    </div>
  );
}

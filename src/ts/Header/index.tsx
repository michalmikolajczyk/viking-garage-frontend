import * as React from 'react';
import Raido from '../Raido';
import i18n from '../i18n';
const i = i18n;

export default function Header(props) {
  return (
    <div className="header">
      <div className="title">
        <div>VIKING</div>
        <div className="below">
          GA<span className="replace"><Raido /></span>AGE
        </div>
      </div>
      <div className="text">
        <a href="">{i('Ride \'Em')}</a>, <a href="">{i('Don\'t Hide \'Em')}</a>
      </div>
    </div>
  );
}

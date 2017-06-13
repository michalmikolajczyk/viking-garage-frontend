import * as React from 'react';
import Raido from '../Raido';
import i from '../i18n';

export default function Header(props) {
  return (
    <div className="header">
      <div className="title">
        <div>VIKING</div>
        <div className="below">
          GA<span className="replace">R<Raido /></span>AGE
        </div>
      </div>
      <div className="text">
        {i('rent motorcycles and gear')}
        <br />
        {i('find mechanics, coaches, trails')}
        <div className="text-in">
          {i('everywhere in the world')}
        </div>
      </div>
    </div>
  );
}

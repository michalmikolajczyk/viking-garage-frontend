import * as React from 'react';
import i from '../i18n';

export default function Header(props) {
  return (
    <div className="cont header">
      <div className="title">
        VIKING
        <div className="title-in">
          GA
          <span className="replace">
            &#160;&#160;
            <span className="raido">
              &#5809;
            </span>
          </span>
          AGE
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

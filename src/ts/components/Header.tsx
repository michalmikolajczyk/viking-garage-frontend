import React from 'react';

export default function Header (props) {
  return (
    <div className="container header">
      <div className="title">
        VIKING
        <div>
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
        rent motorcycles and gear
        <br />
        find mechanics, coaches, trails
        <br />
        everywhere in the world
      </div>
    </div>
  );
}

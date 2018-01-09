import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import i18n from '../i18n';
const i = i18n;

export default function BlogArticle(props) {
  return (
    <div>
      <AppBarVG {...props} />
      <div className="page">
        <div className="page-body">
          <h1 className="title heading-one page-title">VIKING GARAGE Article</h1>
          <h2 className="head">Coming soon!</h2>
        </div>
      </div>
    </div>
  );
}

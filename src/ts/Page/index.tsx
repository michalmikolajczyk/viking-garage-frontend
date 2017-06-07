import * as React from 'react';
import { Link } from 'react-router';
import Header from '../Header';
import pages from './pages';
import i from '../i18n';

export default function Page(props) {
  const { type } = props.params;

  return (
    <div>
      <Header />
      <div className="form">
        <div className="title">{pages[type]['title']}</div>
        <div className="title-sub">
          {pages[type]['text']}
          <br />
          <br />
        </div>
        <div className="inputs">
          <button
            className="submit"
          >{pages[type]['button']}</button>
        </div>
      </div>
    </div>
  );
}

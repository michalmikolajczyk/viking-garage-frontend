import * as React from 'react';
import { Link } from 'react-router';
import Contact from '../Contact';
import pages from './pages';
import i from '../i18n';

export default function Page(props) {
  const { type } = props.params;
  const msg = pages[type];

  return (
    <div className="pages">
      <div className="form">
        <div className="title">{msg['title']}</div>
        <div className="title-sub">
          {msg['text']}
          <br />
          <br />
        </div>
        <Contact
          type={type}
          title={msg['dialog']['head']}
          button={<div className="page-btn">{msg['button']}</div>}
          success={msg['success']}
        >
          <div className="title">
            {msg['dialog']['title']}
          </div>
          <div className="text">
            {msg['dialog']['body']}
          </div>
        </Contact>
      </div>
    </div>
  );
}

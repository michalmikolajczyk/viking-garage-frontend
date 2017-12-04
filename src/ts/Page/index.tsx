import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import Contact from '../Contact';
import pages from './pages';
import i from '../i18n';

export default function Page(props) {
  const type = props.location.pathname.split('/').pop();
  const msg = pages(i())[type];

  const contact1 = msg['button'] && (
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
  );

  const contact2 = msg['button2'] && (
    <Contact
      type={type}
      title={msg['dialog2']['head']}
      button={<div className="page-btn">{msg['button2']}</div>}
      success={msg['success2']}
    >
      <div className="title">
        {msg['dialog2']['title']}
      </div>
      <div className="text">
        {msg['dialog2']['body']}
      </div>
    </Contact>
  );

  const page2 = msg['title2'] && (
    <div>
      <div className="title">{msg['title2']}</div>
      <div className="head">{msg['head2']}</div>
      <div className="image" style={{ backgroundImage: `url(${msg['image2']})` }} />
      <div className="text">{msg['text2']}</div>
      {contact2}
    </div>
  );

  const img1 = msg['image1'] && (<div className="image" style={{ backgroundImage: `url(${msg['image1']})` }} />);

  const text = msg['texta'] ? (
    <div className="page-body">
      {img1}
      <div className="text">{msg['texta']}</div>
      <div className="image" style={{ backgroundImage: `url(${msg['imageb']})` }} />
      <div className="text">{msg['textb']}</div>
    </div>
  ) : (
    <div>
      {img1}
      <div className="text">{msg['text']}</div>
    </div>
  );

  return (
    <div>
      <AppBarVG {...props} />
      <div className="page">
        <div className="title">{msg['title']}</div>
        <div className="head">{msg['head']}</div>
        {text}
        {contact1}
        {page2}
      </div>
    </div>
  );
}

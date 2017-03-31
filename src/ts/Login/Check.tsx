import * as React from 'react';
import i from '../i18n';
import Container from '../Container';

export default function Check() {
  return (
    <Container className="cont">
      <div className="form">
        <h1 className="title">{i('Please check your inbox')}</h1>
        <div className="title-sub">
          {i('We sent a message to the e-mail address you provided.')}
          <br />
          {i('Please check your inbox and follow the instructions, to continue.')}
          <br />
          <br />
          {i('If you did not receive an e-mail, please')}
          <br />
          {i('contact us at')}
          &#160;
          <a
            href="mailto:support@vikinggarage.com"
            className="title-btn"
          >
            support@vikinggarage.com
          </a>
        </div>
        <div className="inputs">
        </div>
      </div>
    </Container>
  );
}

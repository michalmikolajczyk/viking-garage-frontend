import * as React from 'react';
import { Link } from 'react-router';
import i from '../i18n';
import Container from '../Container';
import { resend } from './api';
import debug from 'debug';
const log = debug('app:Confirm');

export default function Confirm(props) {

  function resendEmail() {
    const email = props.params.email;
    resend({ email })
      .then(res => log(`Email resend successfully ${res}`))
      .catch(err => log(`Email resend error ${err}`));
  }

  return (
    <Container className="cont">
      <div className="form">
        <h1 className="title">{i('Please confirm your account')}</h1>
        <div className="title-sub">
          {i('We sent a message with a confirmation link, to the e-mail address you provided.')}
          <br />
          {i('Please check your inbox and click on the link, to continue.')}
          <br />
          <br />
          {i('If you did not receive an e-mail, please')}&#160;
          <a onClick={resendEmail} className="title-btn">
            {i('try again')}
          </a>
          &#160;
          {i('or')}
          <br />
          {i('contact us at')}
          &#160;
          <a
            href="mailto:support@vikinggarage.com"
            className="title-btn"
          >support@vikinggarage.com</a>
        </div>
      </div>
    </Container>
  );
}

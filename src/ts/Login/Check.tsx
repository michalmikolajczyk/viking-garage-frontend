import * as React from 'react';
import Container from '../Container';

export default function Check() {
  return (
    <Container className="cont">
      <div className="form">
        <h1 className="title">Please check your inbox</h1>
        <div className="title-sub">
          We sent a message to the e-mail address you provided.
          <br />
          Please check your inbox and follow the instructions, to continue.
          <br />
          <br />
          If you did not receive an e-mail, please
          <br />
          contact us at&#160;
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

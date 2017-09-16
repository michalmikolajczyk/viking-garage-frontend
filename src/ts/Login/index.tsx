import * as React from 'react';
import { Link } from 'react-router';
import i from '../i18n';
import Header from '../Header';
import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div>
      <Header />
      <div className="form">
        <h1 className="title">{i('Log in to your account')}</h1>
        <div className="title-sub">
          {i('New user?')}
          &#160;
          <Link to="signup" className="title-btn">
            {i('Click here to create your account!')}
          </Link>
        </div>
        <div className="inputs">
          <LoginForm />
          <Link to="reset" className="foot-btn">
            {i('Reset your password')}
          </Link>
          <Link to="signup" className="foot-btn create-new">
            {i('Create new account')}
          </Link>
        </div>
      </div>
    </div>
  );
}

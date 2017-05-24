import * as React from 'react';
import { Link } from 'react-router';
import i from '../i18n';
import Header from '../Header';
import SigninForm from './SigninForm';

export default function Signin(props) {
  return (
    <div>
      <Header />
      <div className="form">
        <h1 className="title">{i('Create a new account')}</h1>
        <div className="title-sub">
          {i('Already have an account?')}
          &#160;
          <Link to="login" className="title-btn">
            {i('Click here to log in!')}
          </Link>
        </div>
        <div className="inputs">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}

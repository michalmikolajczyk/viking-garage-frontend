import * as React from 'react'
import { Link } from 'react-router'
import Container from '../Container'
import LoginForm from './LoginForm'

export default function Login (props) {
  return (
    <Container className="cont">
      <div className="form">
        <h1 className="title">Log in to your account</h1>
        <div className="title-sub">
          New user?&#160;
          <Link to="signin" className="title-btn">
            Click here to create your account!
          </Link>
        </div>
        <div className="inputs">
          <LoginForm />
          <Link to="reset" className="foot-btn">
            Reset your password
          </Link>
          <Link to="signin" className="foot-btn">
            CREATE NEW ACCOUNT
          </Link>
        </div>
      </div>
    </Container>
  )
}

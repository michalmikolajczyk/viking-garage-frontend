import * as React from 'react'
import { Link } from 'react-router'
import Container from '../Container'
import LoginForm from './LoginForm'

export default function Login (props) {
  return (
    <Container className="cont">
      <div className="accounts">
        <h1 className="title">Log in to your account</h1>
        <div className="new-user">
          New user?&#160;
          <Link to="signin">
            <span className="signin-link">
              Click here to create your account!
            </span>
          </Link>
        </div>
        <div className="form">
          <LoginForm />
          <Link to="reset">
            <div className="reset">
            Reset your password
            </div>
          </Link>
          <Link to="create">
            <div className="create">
              CREATE NEW ACCOUNT
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

import * as React from 'react'
import { Link } from 'react-router'
import Container from '../Container'
import SigninForm from './SigninForm'

export default function Signin(props) {
  return (
    <Container className="cont">
      <div className="form">
        <h1 className="title">Create a new account</h1>
        <div className="title-sub">
          Already have an account?&#160;
          <Link to="login" className="title-btn">
            Click here to log in!
          </Link>
        </div>
        <div className="inputs">
          <SigninForm />
        </div>
      </div>
    </Container>
  )
}

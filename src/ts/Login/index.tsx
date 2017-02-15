import * as React from 'react'
import { Link } from 'react-router'
import Container from '../Container'
import {
  Checkbox,
  TextField,
} from 'material-ui'

// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Login extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      check: true,
      email: '',
      pass: '',
      passErr: '',
      emailErr: '',
    };
    this.check = this.check.bind(this);
    this.login = this.login.bind(this);
  }

  check() {
    this.setState({
      check: !this.state.check,
    });
  }

  login() {
    if (!regex.test(this.state.email)) {
      this.setState({emailErr: 'Wrong e-mail address!'});
      return;
    }
    if (this.state.pass.length < 6) {
      this.setState({passErr: 'Password too short (min 6 chars)!'});
      return;
    }
  }

  render() {
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
            <TextField
              fullWidth={true}
              floatingLabelText="E-mail"
              errorText={this.state.emailErr}
              onChange={(evt, val) => this.setState({email: val, emailErr: ''})}
            />
            <TextField
              type="password"
              fullWidth={true}
              floatingLabelText="Password"
              errorText={this.state.passErr}
              onChange={(evt, val) => this.setState({pass: val, passErr: ''})}
            />
            <div className="user-remember">
              <Checkbox
                onCheck={this.check}
                checked={this.state.check}
                label="Remember me"
              />
            </div>
            <button className="login" onClick={this.login}>
              LOG IN
            </button>
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
}

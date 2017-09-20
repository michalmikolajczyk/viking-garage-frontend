import * as React from 'react';
import { browserHistory } from 'react-router';
import { Form } from 'formsy-react';
import {
  FormsyCheckbox,
  FormsyText,
} from 'formsy-material-ui/lib';
import i from '../i18n';
import LoginDialog from './LoginDialog';
import NetworkError from '../Dialogs/NetworkError';
import { login } from './api';

export default class LoginForm extends React.Component<any, any> {
  state = {
    canSubmit: false,
    openDialog: false,
    networkErr: false,
  }

  submit = (user) => {
    this.setState({ canSubmit: false });
    login(user)
      .then((res) => {
        if (res['err']) return this.setState({ openDialog: true });
        const data = res['data'];
        const token = data.token;
        const user = data.user;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('jwt', token);
          localStorage.setItem('user', JSON.stringify(user));
        }
        browserHistory.push('/');
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  closeLoginDialog = () => this.setState({ openDialog: false })

  closeNetworkErr = () => this.setState({ networkErr: false })

  render() {
    return (
      <Form
        onValid={() => this.setState({ canSubmit: true })}
        onInvalid={() => this.setState({ canSubmit: false })}
        onSubmit={this.submit}
      >
        <FormsyText
          id="login-email"
          name="email"
          required={true}
          fullWidth={true}
          validations="isEmail"
          floatingLabelText={i('E-mail')}
          validationError={i('Wrong e-mail address!')}
        />
        <FormsyText
          id="login-password"
          name="password"
          type="password"
          required={true}
          fullWidth={true}
          validations="minLength:6"
          floatingLabelText={i('Password')}
          validationError={i('Password too short! Minimum 6 chars')}
        />
        <div className="checkbox">
          <FormsyCheckbox
            value={true}
            name="remember"
            label={i('Remember me')}
          />
        </div>
        <button
          className="submit"
          disabled={!this.state.canSubmit}
        >
          {i('Log in')}
        </button>
        <LoginDialog
          open={this.state.openDialog}
          close={this.closeLoginDialog}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </Form>
    );
  }
}

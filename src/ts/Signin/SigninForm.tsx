import * as React from 'react';
import { browserHistory } from 'react-router';
import { Form } from 'formsy-react';
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib';
import i from '../i18n';
import SigninDialog from './SigninDialog';
import NetworkError from '../Dialogs/NetworkError';
import { signin } from './api';
import debug from 'debug';
const log = debug('app:Signin');

export default class SiginForm extends React.Component<any, any> {
  state = {
    canSubmit: false,
    openDialog: false,
    networkErr: false,
  }

  submit = (user) => {
    this.setState({ canSubmit: false });
    signin(user)
      .then((res) => {
        if (res['err']) return this.setState({ openDialog: true });
        browserHistory.push(`/confirm/${user.email}`);
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  closeSigninDialog = () => this.setState({ openDialog: false })

  closeNetworkErr = () => this.setState({ networkErr: false })

  render() {
    return (
      <Form
        onValid={() => this.setState({ canSubmit: true })}
        onInvalid={() => this.setState({ canSubmit: false })}
        onSubmit={this.submit}
      >
        <FormsyText
          name="name"
          required={true}
          fullWidth={true}
          floatingLabelText={i('Full Name')}
          validations="minLength:3"
          validationError={i('Full name too short! Minimum 3 chars')}
        />
        <FormsyText
          name="email"
          required={true}
          fullWidth={true}
          floatingLabelText={i('E-mail')}
          validations="isEmail"
          validationError={i('Wrong e-mail address!')}
        />
        <FormsyDate
          name="birthday"
          floatingLabelText={i('Date of birth')}
          required={true}
          fullWidth={true}
        />
        <FormsyText
          name="password1"
          type="password"
          required={true}
          fullWidth={true}
          floatingLabelText={i('Password')}
          validations="minLength:6"
          validationError={i('Password too short! Minimum 6 chars')}
        />
        <FormsyText
          name="password2"
          type="password"
          required={true}
          fullWidth={true}
          floatingLabelText={i('Repeat Password')}
          validations="equalsField:password1"
          validationError={i('The passwords must be the same')}
        />
        <div className="checkbox">
          <FormsyCheckbox
            value={true}
            required={true}
            name="agree"
            label={i('I agree to the Terms of Service')}
            validations="isTrue"
            validationError={i('You should agree with Terms of Service')}
          />
        </div>
        <button
          className="submit"
          disabled={!this.state.canSubmit}
        >
          {i('Sign in')}
        </button>
        <SigninDialog
          open={this.state.openDialog}
          close={this.closeSigninDialog}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </Form>
    );
  }
}

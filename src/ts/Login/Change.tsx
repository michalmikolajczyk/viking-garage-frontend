import * as React from 'react';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import Header from '../Header';
import ChangeError from './ChangeError';
import ChangeSuccess from './ChangeSuccess';
import NetworkError from '../Dialogs/NetworkError';
import { change } from './api';
import i from '../i18n';

export default class Change extends React.Component<any, any> {
  state = {
    canSubmit: false,
    networkErr: false,
    changeError: false,
    changeSuccess: false,
  }

  submit = (passwords) => {
    const { token } = this.props.params;
    change({ token, ...passwords })
      .then((res) => {
        if (res['err']) return this.setState({ changeError: true });
        this.setState({ changeSuccess: true });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  onValid = () => this.setState({ canSubmit: true })

  onInvalid = () => this.setState({ canSubmit: false })

  closeChangeError = () => this.setState({ changeError: false })

  closeChangeSuccess = () => this.setState({ changeSuccess: false })

  closeNetworkError = () => this.setState({ networkErr: false })

  render() {
    return (
      <div>
        <Header />
        <div className="form">
          <h1 className="title">Change your password.</h1>
          <div className="title-sub">
            Please provide your new password.
          </div>
          <div className="inputs">
            <Form
              onValid={this.onValid}
              onInvalid={this.onInvalid}
              onSubmit={this.submit}
            >
              <div className="reset">
                <FormsyText
                  name="password1"
                  type="password"
                  required={true}
                  fullWidth={true}
                  floatingLabelText={i('New Password')}
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
                  validationError={i('The passwords must be the same!')}
                />
              </div>
              <button
                className="submit"
                disabled={!this.state.canSubmit}
              >
                CHANGE PASSWORD
              </button>
              <ChangeError
                open={this.state.changeError}
                close={this.closeChangeError}
              />
              <ChangeSuccess
                open={this.state.changeSuccess}
                close={this.closeChangeSuccess}
              />
              <NetworkError
                open={this.state.networkErr}
                close={this.closeNetworkError}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

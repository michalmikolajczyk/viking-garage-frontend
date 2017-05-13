import * as React from 'react';
import { browserHistory } from 'react-router';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import i from '../i18n';
import Container from '../Container';
import ResetError from './ResetError';
import NetworkError from '../Dialogs/NetworkError';
import { reset } from './api';

export default class Reset extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      openDialog: false,
      networkErr: false,
    };
  }

  onValid = () => this.setState({ canSubmit: true });

  onInValid = () => this.setState({ canSubmit: false });

  closeResetDialog = () => this.setState({ openDialog: false });

  closeNetworkDialog = () => this.setState({ networkErr: false });

  submit = (email) => {
    this.setState({ canSubmit: false });
    reset(email)
      .then((res) => {
        if (res['err']) return this.setState({ openDialog: true });
        browserHistory.push('/check');
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  render() {
    return (
      <Container className="cont">
        <div className="form">
          <h1 className="title">{i('Reset your password')}</h1>
          <div className="title-sub">
            {i('Please provide your e-mail address.')}
            <br />
            {i('We will send you a message with further instructions.')}
          </div>
          <div className="inputs">
            <Form
              onValid={this.onValid}
              onInvalid={this.onInValid}
              onSubmit={this.submit}
            >
              <div className="reset">
                <FormsyText
                  name="email"
                  required={true}
                  fullWidth={true}
                  validations="isEmail"
                  floatingLabelText={i('E-mail')}
                  validationError={i('Wrong e-mail address!')}
                />
              </div>
              <button
                className="submit"
                disabled={!this.state.canSubmit}
              >
                {i('Reset password')}
              </button>
              <ResetError
                open={this.state.openDialog}
                close={this.closeResetDialog}
              />
              <NetworkError
                open={this.state.networkErr}
                close={this.closeNetworkDialog}
              />
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

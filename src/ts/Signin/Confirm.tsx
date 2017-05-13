import * as React from 'react';
import { browserHistory } from 'react-router';
import i from '../i18n';
import Container from '../Container';
import ConfirmSuccess from './ConfirmSuccess';
import NetworkError from '../Dialogs/NetworkError';
import { resend } from './api';

export default class Confirm extends React.Component<any, any> {
  state = {
    openDialog: false,
    networkErr: false,
  };

  closeConfirmDialog = () => {
    this.setState({ openDialog: false });
    browserHistory.push('/');
  };

  closeNetworkDialog = () => this.setState({ networkErr: false });

  submit = () => {
    const { email } = this.props.params;
    resend({ email })
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        this.setState({ openDialog: true });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  render() {
    return (
      <Container className="cont">
        <div className="form">
          <h1 className="title">{i('Please confirm your account')}</h1>
          <div className="title-sub">
            {i('We sent a message with a confirmation link, to the e-mail address you provided.')}
            <br />
            {i('Please check your inbox and click on the link, to continue.')}
            <br />
            <br />
            {i('If you did not receive an e-mail, please')}&#160;
            <a onClick={this.submit} className="title-btn">
              {i('try again')}
            </a>
            &#160;
            {i('or')}
            <br />
            {i('contact us at')}
            &#160;
            <a
              href="mailto:support@vikinggarage.com"
              className="title-btn"
            >support@vikinggarage.com</a>
          </div>
        </div>
        <ConfirmSuccess
          open={this.state.openDialog}
          close={this.closeConfirmDialog}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkDialog}
        />
      </Container>
    );
  }
}

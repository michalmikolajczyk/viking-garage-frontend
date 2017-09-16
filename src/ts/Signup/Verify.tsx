import * as React from 'react';
import { browserHistory } from 'react-router';
import NetworkError from '../Dialogs/NetworkError';
import VerifyError from './VerifyError';
import VerifySuccess from './VerifySuccess';
import { verify } from './api';

export default class Verify extends React.Component<any, any> {
  state = {
    networkErr: false,
    verifyError: false,
    verifySuccess: false,
  }

  componentDidMount() {
    this.verifyAccount();
  }

  verifyAccount() {
    const token = this.props.params.token;
    verify({ token })
      .then((res) => {
        if (res['err']) return this.setState({ verifyError: true });
        const token = res['token'];
        const user = res['user'];
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ verifySuccess: true });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  closeNetworkErr = () => this.setState({ networkErr: false })

  closeVerifyError = () => this.setState({ verifyError: false })

  closeVerifySuccess = () => {
    this.setState({ verifySuccess: false });
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <VerifyError
          open={this.state.verifyError}
          close={this.closeVerifyError}
        />
        <VerifySuccess
          open={this.state.verifySuccess}
          close={this.closeVerifySuccess}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

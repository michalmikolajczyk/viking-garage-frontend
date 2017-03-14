import * as React from 'react';
import { browserHistory } from 'react-router';
import Offers from '../Offers';
import NetworkError from '../Dialogs/NetworkError';
import VerifyError from './VerifyError';
import VerifySuccess from './VerifySuccess';
import { verify } from './api';

export default class Verify extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      networkErr: false,
      verifyError: false,
      verifySuccess: false,
    };
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

  render() {
    return (
      <div>
        <Offers />
        <VerifyError
          open={this.state.verifyError}
          close={() => this.setState({ verifyError: false })}
        />
        <VerifySuccess
          open={this.state.verifySuccess}
          close={() => {this.setState({ verifySuccess: false }); browserHistory.push('/'); }}
        />
        <NetworkError
          open={this.state.networkErr}
          close={() => this.setState({ networkErr: false })}
        />
      </div>
    );
  }
}

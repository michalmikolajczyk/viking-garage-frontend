import * as React from 'react';
import {
  Paper,
} from 'material-ui';
import { Form } from 'formsy-react';
import * as moment from 'moment';
import i from '../i18n';
import {
  get,
  put,
} from './api';
import UserMenu from './UserMenu';
import UserSide from './UserSide';
import UserPhoto from './UserPhoto';
import UserRequired from './UserRequired';
import UserOptional from './UserOptional';

import SaveError from '../Dialogs/SaveError';
import SaveSuccess from '../Dialogs/SaveSuccess';
import NetworkError from '../Dialogs/NetworkError';
import Unauthorized from '../Dialogs/Unauthorized';

export default class UserEdit extends React.Component<any, any> {
  state = {
    user: null,
    canSubmit: false,
    saveError: false,
    saveSuccess: false,
    networkErr: false,
    unauthorized: false,
  };

  componentDidMount() {
    get()
      .then((res) => {
        if (res && res['err']) return this.setState({ networkErr: true });
        this.setState({ user: res['data'] });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  submit = (user) => {
    this.setState({ canSubmit: false });
    put(user)
      .then((res) => {
        if (res && res['err']) return this.setState({ saveError: true });
        this.setState({ saveSuccess: true });
      })
      .catch(err => this.setState({ networkErr: true }));
  }

  onValid = () => this.setState({ canSubmit: true });

  onInvalid = () => this.setState({ canSubmit: false });

  saveErrorClose = () => this.setState({ saveError: false });

  saveSuccessClose = () => this.setState({ saveSuccess: false });

  networkErrClose = () => this.setState({ networkErr: false });

  render() {
    return (
      <div>
        <UserMenu />
        <div className="user-wrap">
          <UserSide />
          <div className="user-edit">
            <UserPhoto user={this.state.user}/>
            <Form
              onValid={this.onValid}
              onInvalid={this.onInvalid}
              onSubmit={this.submit}
            >
              <UserRequired user={this.state.user} />
              <UserOptional user={this.state.user} />
              <button
                className="submit"
                disabled={!this.state.canSubmit}
              >
                {i('Save')}
              </button>
            </Form>
          </div>
        </div>
        <Unauthorized
          open={this.state.unauthorized}
        />
        <SaveError
          open={this.state.saveError}
          close={this.saveErrorClose}
        />
        <SaveSuccess
          open={this.state.saveSuccess}
          close={this.saveSuccessClose}
        />
        <NetworkError
          open={this.state.networkErr}
          close={this.networkErrClose}
        />
      </div>
    );
  }
}

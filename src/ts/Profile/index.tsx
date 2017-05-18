import * as React from 'react';
import {
  Paper,
} from 'material-ui';
import { Form } from 'formsy-react';
import * as moment from 'moment';
import i from '../i18n';
import Container from '../Container';
import UserMenu from './UserMenu';
import UserPhoto from './UserPhoto';
import UserRequrired from './UserRequired';
import UserOptional from './UserOptional';

export default class UserEdit extends React.Component<any, any> {
  state = {
    user: null,
    canSubmit: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: {
          firstname: 'Michal',
          lastname: 'Mikolajczyk',
          birthday: moment('1981-01-12 00:00:00+01').toDate(),
          email: 'michal@vikinggarage.com',
        }
      })
    }, 5000)
  }

  submit = (user) => {
    console.log(user)
  }

  onValid = () => this.setState({ canSubmit: true })

  onInvalid = () => this.setState({ canSubmit: false })

  render() {
    return (
      <Container close={true}>
        <UserMenu />
        <div className="user-edit">
          <UserPhoto />
          <Form
            onValid={this.onValid}
            onInvalid={this.onInvalid}
            onSubmit={this.submit}
          >
            <UserRequrired user={this.state.user} />
            <UserOptional user={this.state.user} />
            <button
              className="submit"
              disabled={!this.state.canSubmit}
            >
              {i('Save')}
            </button>
          </Form>
        </div>
      </Container>
    );
  }
}

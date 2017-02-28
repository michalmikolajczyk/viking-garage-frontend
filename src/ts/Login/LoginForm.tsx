import * as React from 'react'
import { browserHistory } from 'react-router'
import { Form } from 'formsy-react'
import {
  FormsyCheckbox,
  FormsyText,
} from 'formsy-material-ui/lib'
import LoginDialog from './LoginDialog'
import NetworkError from '../Dialogs/NetworkError'
import { login } from './api'
import debug from 'debug'
let log = debug('app:Login')

export default class LoginForm extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
      openDialog: false,
      networkErr: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit(user) {
    this.setState({canSubmit: false})
    login(user)
    .then(res => {
      if (res['err']) {
        this.setState({openDialog: true})
      } else {
        let token = res['token']
        let user = res['user']
        localStorage.setItem('jwt', token)
        localStorage.setItem('user', user)
        browserHistory.push('/')
      }
    })
    .catch(err => {
      this.setState({networkErr: true})
    })
  }

  render() {
    return (
      <Form
        onValid={() => this.setState({canSubmit: true})}
        onInvalid={() => this.setState({canSubmit: false})}
        onSubmit={this.submit}
      >
        <FormsyText
          name="email"
          value="viking.garage.app@gmail.com"
          required={true}
          fullWidth={true}
          validations="isEmail"
          floatingLabelText="E-mail"
          validationError="Wrong e-mail address!"
        />
        <FormsyText
          name="password"
          type="password"
          value="secret"
          required={true}
          fullWidth={true}
          validations="minLength:6"
          floatingLabelText="Password"
          validationError="Password too short! Minimum 6 chars"
        />
        <div className="checkbox">
          <FormsyCheckbox
            value={true}
            name="remember"
            label="Remember me"
          />
        </div>
        <button
          className="submit"
          disabled={!this.state.canSubmit}
        >
          LOG IN
        </button>
        <LoginDialog
          open={this.state.openDialog}
          close={() => this.setState({openDialog: false})}
        />
        <NetworkError
          open={this.state.networkErr}
          close={() => this.setState({networkErr: false})}
        />
      </Form>
    )
  }
}

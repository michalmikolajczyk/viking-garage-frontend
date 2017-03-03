import * as React from 'react'
import { browserHistory } from 'react-router'
import { Form } from 'formsy-react'
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib'
import SigninDialog from './SigninDialog'
import NetworkError from '../Dialogs/NetworkError'
import { signin } from './api'
import debug from 'debug'
let log = debug('app:Signin')

export default class SiginForm extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      openDialog: false,
      networkErr: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit(user) {
    this.setState({canSubmit: false})
    signin(user)
      .then(res => {
        if (res['err']) {
          this.setState({openDialog: true})
        } else {
          browserHistory.push(`/confirm/${user.email}`)
        }
      })
      .catch(err => this.setState({networkErr: true}))
  }

  render() {
    return (
      <Form
        onValid={() => this.setState({canSubmit: true})}
        onInvalid={() => this.setState({canSubmit: false})}
        onSubmit={this.submit}
      >
        <FormsyText
          name="name"
          value="Viking Garage"
          required={true}
          fullWidth={true}
          floatingLabelText="Full Name"
          validations="minLength:3"
          validationError="Full name too short! Minimum 3 chars"
        />
        <FormsyText
          name="email"
          placeholder="user@host.domain"
          required={true}
          fullWidth={true}
          floatingLabelText="E-mail"
          validations="isEmail"
          validationError="Wrong e-mail address!"
        />
        <FormsyDate
          name="birthday"
          floatingLabelText="Date of birth"
          required={true}
          fullWidth={true}
        />
        <FormsyText
          name="password1"
          type="password"
          value="secret"
          required={true}
          fullWidth={true}
          floatingLabelText="Password"
          validations="minLength:6"
          validationError="Password too short! Minimum 6 chars"
        />
        <FormsyText
          name="password2"
          type="password"
          value="secret"
          required={true}
          fullWidth={true}
          floatingLabelText="Repeat Password"
          validations="equalsField:password1"
          validationError="The passwords must be the same!"
        />
        <div className="checkbox">
          <FormsyCheckbox
            value={true}
            required={true}
            name="agree"
            label="I agree to the Terms of Service"
            validations="isTrue"
            validationError="You should agree with Terms of Service!"
          />
        </div>
        <button
          className="submit"
          disabled={!this.state.canSubmit}
        >
          SIGN IN
        </button>
        <SigninDialog
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

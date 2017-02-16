import * as React from 'react'
import { Form } from 'formsy-react'
import { Link } from 'react-router'
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib'
import SigninDialog from './SigninDialog'
import { signin } from './api'
import debug from 'debug'
var log = debug('app:Login')

export default class SiginForm extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      openDialog: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit(user) {
    console.log(user)
    signin(user)
    .then(res => {
      if (res['error']) {
        this.setState({openDialog: true})
      } else {
        log('user signup success')
      }
    })
    .catch(err => {
      log('signup error', err)
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
          name="name"
          value=""
          required={true}
          fullWidth={true}
          floatingLabelText="Full Name"
          validations="minLength:3"
          validationError="Full name too short! Minimum 3 chars"
        />
        <FormsyText
          name="email"
          value=""
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
          value=""
          required={true}
          fullWidth={true}
          floatingLabelText="Password"
          validations="minLength:6"
          validationError="Password too short! Minimum 6 chars"
        />
        <FormsyText
          name="password2"
          type="password"
          value=""
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
          SIGN UP
        </button>
        <SigninDialog
          open={this.state.openDialog}
          close={() => this.setState({openDialog: false})}
        />
      </Form>
    )
  }
}

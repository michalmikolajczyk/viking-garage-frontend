import * as React from 'react'
import { Form } from 'formsy-react'
import { Link } from 'react-router'
import {
  FormsyCheckbox,
  FormsyText,
} from 'formsy-material-ui/lib'
import LoginDialog from './LoginDialog'

export default class LoginForm extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
      openDialog: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit(a, b, c) {
    console.log(a, b, c)
    this.setState({openDialog: true})
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
          value=""
          required={true}
          fullWidth={true}
          validations="isEmail"
          floatingLabelText="E-mail"
          validationError="Wrong e-mail address!"
        />
        <FormsyText
          name="password"
          type="password"
          value=""
          required={true}
          fullWidth={true}
          validations="minLength:6"
          floatingLabelText="Password"
          validationError="Password too short! Minimum 6 chars"
        />
        <div className="user-remember">
          <FormsyCheckbox
            value={true}
            name="remember"
            label="Remember me"
          />
        </div>
        <button
          className="login"
          disabled={!this.state.canSubmit}
        >
          LOG IN
        </button>
        <LoginDialog
          open={this.state.openDialog}
          close={() => this.setState({openDialog: false})}
        />
      </Form>
    )
  }
}

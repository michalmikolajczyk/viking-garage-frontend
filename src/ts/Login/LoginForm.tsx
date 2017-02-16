import * as React from 'react'
import { Form } from 'formsy-react'
import { Link } from 'react-router'
import {
  FormsyCheckbox,
  FormsyText,
} from 'formsy-material-ui/lib'

export default class LoginForm extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {canSubmit: false}
  }

  submit() {}

  render() {
    return (
      <Form
        onValid={() => this.setState({canSubmit: true})}
        onInvalid={() => this.setState({canSubmit: false})}
        onValidSubmit={() => undefined}
        onInvalidSubmit={() => undefined}
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
          fullWidth={true}
          floatingLabelText="Password"
          errorText={this.state.passErr}
          onChange={(evt, val) => this.setState({pass: val, passErr: ''})}
        />
        <div className="user-remember">
          <FormsyCheckbox
            name="remember"
            onCheck={() => undefined}
            checked={this.state.check}
            label="Remember me"
          />
        </div>
        <button
          onClick={() => undefined}
          className="login"
          disabled={this.state.disabled}
        >
          LOG IN
        </button>
      </Form>
    )
  }
}

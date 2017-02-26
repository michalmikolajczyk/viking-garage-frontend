import * as React from 'react'
import { Form } from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib'
import Container from '../Container'
import NetworkError from '../Dialogs/NetworkError'
import ChangeError from './ChangeError'
import ChangeSuccess from './ChangeSuccess'
import { change } from './api'
import debug from 'debug'
let log = debug('app:Change')

export default class Change extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
      networkErr: false,
      changeError: false,
      changeSuccess: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit(passwords) {
    let token = this.props.params.token
    change({token, ...passwords})
    .then(res => {
      if (res['err']) {
        this.setState({changeError: true})
      } else {
        this.setState({changeSuccess: true})
      }
    })
    .catch(err => {
      this.setState({networkErr: true})
    })
  }

  render() {
    return (
      <Container className="cont">
        <div className="form">
          <h1 className="title">Change your password.</h1>
          <div className="title-sub">
            Please provide your new password.
          </div>
          <div className="inputs">
            <Form
              onValid={() => this.setState({canSubmit: true})}
              onInvalid={() => this.setState({canSubmit: false})}
              onSubmit={this.submit}
            >
              <div className="reset">
                <FormsyText
                  name="password1"
                  type="password"
                  value="secret"
                  required={true}
                  fullWidth={true}
                  floatingLabelText="New Password"
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
              </div>
              <button
                className="submit"
                disabled={!this.state.canSubmit}
              >
                CHANGE PASSWORD
              </button>
              <ChangeSuccess
                open={this.state.changeSuccess}
                close={() => this.setState({changeSuccess: false})}
              />
              <ChangeError
                open={this.state.changeError}
                close={() => this.setState({changeError: false})}
              />
              <NetworkError
                open={this.state.networkErr}
                close={() => this.setState({networkErr: false})}
              />
            </Form>
          </div>
        </div>
      </Container>
    )
  }
}

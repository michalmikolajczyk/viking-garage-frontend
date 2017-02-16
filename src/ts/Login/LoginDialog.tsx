import * as React from 'react'
import {
  Dialog,
  FlatButton,
} from 'material-ui'

export default function LoginDialog(props) {

  const {
    open,
    close,
  } = props

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/reset"
        label="Reset password"
        primary={true}
      />
      <FlatButton
        href="signin"
        label="Create new account"
        primary={true}
      />
    </div>,
    <FlatButton
      label="Cancel"
      primary={true}
      keyboardFocused={true}
      onTouchTap={close}
    />,
  ]

  return (
    <Dialog
      open={open}
      contentStyle={{maxWidth: 650}}
      title="Invalid e-mail or password"
      actions={actions}
    >
      The e-mail &amp; password combination did not work. Please confirm the details and try again, or follow one of the options below:
    </Dialog>
  )
}

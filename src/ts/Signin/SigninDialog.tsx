import * as React from 'react'
import {
  Dialog,
  FlatButton,
} from 'material-ui'

export default function SigninDialog(props) {

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
      title="Invalid e-mail"
      actions={actions}
    >
      User with provided e-mail already exists, provide other e-mail or reset the password.
    </Dialog>
  )
}

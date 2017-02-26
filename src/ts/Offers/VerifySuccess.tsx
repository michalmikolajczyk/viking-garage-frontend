import * as React from 'react'
import {
  Dialog,
  FlatButton,
} from 'material-ui'

export default function VerifySuccess(props) {

  const {
    open,
    close,
  } = props

  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onTouchTap={close}
      keyboardFocused={true}
    />,
  ]

  return (
    <Dialog
      open={open}
      contentStyle={{maxWidth: 650}}
      title="New account verified"
      actions={actions}
    >
      Success! Your new account was verified.
    </Dialog>
  )
}

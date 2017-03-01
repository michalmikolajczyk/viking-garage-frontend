import * as React from 'react'
import {
  Dialog,
  FlatButton,
} from 'material-ui'

export default function ChangeSuccess(props) {

  const {
    open,
    close,
  } = props

  const actions = [
    <div className="float-left">
      <FlatButton
        primary={true}
        onTouchTap={close}
        label="Close"
      />
    </div>,
    <FlatButton
      href="/login"
      label="Login"
      primary={true}
      keyboardFocused={true}
    />,
  ]

  return (
    <Dialog
      open={open}
      contentStyle={{maxWidth: 650}}
      title="Password changed successfully"
      actions={actions}
    >
      Success! Your password was changed.
    </Dialog>
  )
}

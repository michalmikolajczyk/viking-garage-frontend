import * as React from 'react'
import {
  Dialog,
  FlatButton,
} from 'material-ui'

export default function ChangeError(props) {

  const {
    open,
    close,
  } = props

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/reset"
        label="Reset password again"
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
      title="Confirmation Link Invalid"
      actions={actions}
    >
      The confirmation link was invalid. Please try again to <a href="/reset" className="link">reset your password</a>, or contact us at <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  )
}

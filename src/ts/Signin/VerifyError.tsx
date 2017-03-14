import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';

export default function ChangeError(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/signin"
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
  ];

  return (
    <Dialog
      open={open}
      contentStyle={{ maxWidth: 650 }}
      title="Confirmation Link Invalid"
      actions={actions}
    >
      The confirmation link was invalid. Please try again to <a href="/signin" className="link">create account</a>, or contact us at <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  );
}

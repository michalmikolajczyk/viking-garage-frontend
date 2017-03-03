import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';

export default function SigninDialog(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/login"
        label="Login"
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
      title="Invalid e-mail"
      actions={actions}
    >
      That e-mail address is already registered.&#160;
      Please <a href="/login" className="link">log in</a> or use another e-mail address.
    </Dialog>
  );
}

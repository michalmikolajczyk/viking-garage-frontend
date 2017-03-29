import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function LoginDialog(props) {

  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/reset"
        label={i('Reset password')}
        primary={true}
      />
      <FlatButton
        href="signin"
        label={i('Create new account')}
        primary={true}
      />
    </div>,
    <FlatButton
      label={i('Cancel')}
      primary={true}
      keyboardFocused={true}
      onTouchTap={close}
    />,
  ];

  return (
    <Dialog
      open={open}
      contentStyle={{ maxWidth: 650 }}
      title={i('Invalid e-mail or password')}
      actions={actions}
    >
      {i('The e-mail & password combination did not work. Please confirm the details and try again, or follow one of the options below:')}
    </Dialog>
  );
}

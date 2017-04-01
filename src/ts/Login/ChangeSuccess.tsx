import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function ChangeSuccess(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        primary={true}
        onTouchTap={close}
        label={i('Close')}
      />
    </div>,
    <FlatButton
      href="/login"
      label={i('Log in')}
      primary={true}
      keyboardFocused={true}
    />,
  ];

  return (
    <Dialog
      open={open}
      contentStyle={{ maxWidth: 650 }}
      title={i('Password changed successfully')}
      actions={actions}
    >
      {i('Success! Your password was changed.')}
    </Dialog>
  );
}

import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function VerifySuccess(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <FlatButton
      label={i('Close')}
      primary={true}
      onTouchTap={close}
      keyboardFocused={true}
    />,
  ];

  return (
    <Dialog
      open={open}
      contentStyle={{ maxWidth: 650 }}
      title={i('New account verified')}
      actions={actions}
    >
    {i('Success! Your new account was verified.')}
    </Dialog>
  );
}

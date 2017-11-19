import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i18n from '../i18n';
const i = i18n;

export default function NetworkError(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <FlatButton
      label={i('Close')}
      primary={true}
      keyboardFocused={true}
      onTouchTap={close}
    />,
  ];

  return (
    <Dialog
      open={open}
      title={i('We’re not connected')}
      actions={actions}
      contentStyle={{ maxWidth: 650, minWidth: 320 }}
    >
      {i('We’re not connected! Connect your device to the network or try again later.')}
    </Dialog>
  );
}

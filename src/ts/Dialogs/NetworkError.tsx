import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

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
      title={i('Network Error')}
      actions={actions}
      contentStyle={{ maxWidth: 650, minWidth: 320 }}
    >
      {i('Ups! It seems that we have some problems with network, try again later.')}
    </Dialog>
  );
}

import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';

export default function NetworkError(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
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
      title="Network Error"
      actions={actions}
    >
      Ups! It seems that we have some problems with network, try again later.
    </Dialog>
  );
}

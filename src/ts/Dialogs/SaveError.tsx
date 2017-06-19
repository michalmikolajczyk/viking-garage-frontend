import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function SaveError(props) {
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
      title={i('Save Error')}
      actions={actions}
      contentStyle={{ maxWidth: 650, minWidth: 320 }}
    >
      {i('There were some problems with saving new data. Please check whether the data are correct and try again')}
    </Dialog>
  );
}

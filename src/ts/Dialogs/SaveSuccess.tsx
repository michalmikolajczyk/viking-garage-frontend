import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function SaveSuccess(props) {
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
      contentStyle={{ maxWidth: 650 }}
      title={i('Save Success')}
      actions={actions}
    >
      {i('Your new data was saved successfully!')}
    </Dialog>
  );
}

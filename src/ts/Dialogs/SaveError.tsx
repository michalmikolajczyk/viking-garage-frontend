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
      title={i('We cannot save data')}
      actions={actions}
      contentStyle={{ maxWidth: 650, minWidth: 320 }}
    >
      {i('Something is not right! Please provide your data again or try again later.')}
    </Dialog>
  );
}

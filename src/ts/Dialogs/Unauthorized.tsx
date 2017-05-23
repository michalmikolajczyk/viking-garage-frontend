import * as React from 'react';
import { browserHistory } from 'react-router';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function Unauthorized(props) {
  const {
    open,
  } = props;

  const actions = [
    <FlatButton
      label={i('Main page')}
      primary={true}
      keyboardFocused={true}
      onTouchTap={() => browserHistory.push('/')}
    />,
    <FlatButton
      label={i('Log in')}
      primary={true}
      keyboardFocused={true}
      onTouchTap={() => browserHistory.push('/login')}
    />,
  ];

  return (
    <Dialog
      open={open}
      contentStyle={{ maxWidth: 650 }}
      title={i('User Unauthorized')}
      actions={actions}
    >
      {i('Try to log in or go back to the main page')}
    </Dialog>
  );
}

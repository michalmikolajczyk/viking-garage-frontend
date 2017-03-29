import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function SigninDialog(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/login"
        label={i('Log in')}
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
      title={i('Invalid e-mail')}
      actions={actions}
    >
      {i('That e-mail address is already registered.')}
      &#160;
      {i('Please')}
      &#160;
      <a href="/login" className="link">
        {i('log in')}
      </a>
      &#160;
      {i('or use another e-mail address.')}
    </Dialog>
  );
}

import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function VerifyError(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/signin"
        label={i('Create new account')}
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
      title={i('Confirmation link invalid')}
      actions={actions}
    >
      {i('The confirmation link was invalid. Please try again to')}
      &#160;
      <a href="/signin" className="link">
        {i('create account')}
      </a>
      &#160;
      {i('or contact us at')}
      &#160;
      <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  );
}

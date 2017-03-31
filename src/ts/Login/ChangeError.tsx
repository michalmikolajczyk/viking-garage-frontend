import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function ChangeError(props) {
  const {
    open,
    close,
  } = props;

  const actions = [
    <div className="float-left">
      <FlatButton
        href="/reset"
        label={i('Reset password again')}
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
      title={i('Confirmation Link Invalid')}
      actions={actions}
    >
      {i('The confirmation link was invalid. Please try again to')}
      &#160;
      <a href="/reset" className="link">
        {i('reset your password')}
      </a>
      {', '}
      {i('or contact us at')}
      &#160;
      <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  );
}

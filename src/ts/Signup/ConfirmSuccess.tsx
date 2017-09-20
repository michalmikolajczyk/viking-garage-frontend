import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function ConfirmSuccess(props) {
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
      title={i('E-mail resend successfully!')}
      actions={actions}
    >
      {i('We resent a message with a confirmation link. If you did not receive an e-mail, please check your spam folder or contact us at')}
      &#32;
      <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  );
}

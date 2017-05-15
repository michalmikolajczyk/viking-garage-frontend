import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import i from '../i18n';

export default function ResetError(props) {
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
      title={i('Invalid e-mail address')}
      actions={actions}
    >
      {i('Provided e-mail was invalid, please try again')}
      &#160;
      <span onClick={close} className="link">
        {i('reset your password')}
      </span>
      {', '}
      {i('or contact us at')}
      &#160;
      <a href="mailto:support@vikinggarage.com" className="link">support@vikinggarage.com</a>.
    </Dialog>
  );
}

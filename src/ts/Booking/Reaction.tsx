import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import Raido from '../Raido';
import i18n from '../i18n';
const i = i18n;
const paymentFlag = process.env.PAYMENTS || false;

export default function Reaction(props) {
  const {
    data,
    open,
    close,
  } = props;

  const actions = [
    <FlatButton
      label={i('Close')}
      primary={true}
      onTouchTap={close}
    />,
  ];

  return (
      <Dialog
        modal={false}
        actions={actions}
        open={open}
        title={data.title || (<div className="dialog-raido"><Raido /></div>)}
        repositionOnUpdate={false}
        autoDetectWindowHeight={false}
        autoScrollBodyContent={false}
        className="dialog-root"
        contentClassName="dialog-content"
        bodyClassName="dialog-body"
      >
      <div className="dialog-scroll">
        <div className="reaction">
          {data.body}
          <br /><br />
          {paymentFlag && data.payment}
        </div>
      </div>
    </Dialog>
  );
}

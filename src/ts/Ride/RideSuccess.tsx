import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import Raido from '../Raido';
import i from '../i18n';

export default function RideSuccess(props){
  const {
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
      open={open}
      title={<div className="dialog-raido"><Raido /></div>}
      actions={actions}
      modal={false}
      autoScrollBodyContent={true}
    >
      <div className="ride-success">
        Your ride is booked.
        <br />
        <br />
        Our team will contact you within the next 24 hours in order to confirm it and discuss the details.
        <br />
        <br />
        Get ready for an unforgetable experience with VIKING GARAGE!
      </div>
    </Dialog>
  );
}

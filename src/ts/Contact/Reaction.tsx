import * as React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import Raido from '../Raido';
import i from '../i18n';

export default function Reaction(props){
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
      open={open}
      title={data.title || <div className="dialog-raido"><Raido /></div>}
      actions={actions}
      modal={false}
      autoScrollBodyContent={true}
    >
      <div className="reaction">
        {data.body}
      </div>
    </Dialog>
  );
}


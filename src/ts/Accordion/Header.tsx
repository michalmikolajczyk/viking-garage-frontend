import * as React from 'react';
import { FlatButton } from 'material-ui';

export default function Header(props) {
  const {
    call,
    icon,
    head,
  } = props;
  if (typeof head === 'undefined') return null;
  return (
    <div className="acc-header">
      <FlatButton
        icon={icon || <div className="material-icons" />}
        label={head}
        fullWidth={true}
        onTouchTap={call}
        disableTouchRipple={true}
        style={{ textAlign: 'left' }}
      />
    </div>);
}

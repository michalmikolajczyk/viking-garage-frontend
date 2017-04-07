import * as React from 'react';
import { FlatButton } from 'material-ui';

export default function Header(props) {
  const {
    call,
    icon,
    head,
  } = props;

  return (
    <div className="acc-header">
      <FlatButton
        icon={icon || <div className="material-icons" />}
        onTouchTap={call}
        disableTouchRipple={true}
      >
        {head}
      </FlatButton>
    </div>);
}

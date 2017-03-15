import * as React from 'react';
import { FlatButton } from 'material-ui';

export default function AccordionHeader(props) {
  const {
    call,
    icon,
    head,
  } = props;

  return (
    <div className="header">
      <FlatButton
        icon={icon}
        onTouchTap={call}
        disableTouchRipple={true}
      >
        {head}
      </FlatButton>
    </div>);
}

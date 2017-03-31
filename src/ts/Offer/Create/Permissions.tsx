import * as React from 'react';
import {
  FlatButton,
  Paper,
  TextField,
} from 'material-ui';

export default function Permissions(props) {
  return (
    <Paper className="section">
      <div className="header">Permissions</div>
      <div className="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
      </div>
      <div className="buttons">
        <FlatButton label="More info" />
        <div>
          <FlatButton label="Decline" />
          <FlatButton label="Accept" />
        </div>
      </div>
    </Paper>);
}

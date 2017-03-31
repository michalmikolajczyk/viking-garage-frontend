import * as React from 'react';
import {
  FlatButton,
  Paper,
} from 'material-ui';

export default function Sideview(props) {
  return (
    <Paper className="section">
      <div className="header">Permissions</div>
      <div className="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
      </div>
      <div className="buttons">
        <div />
        <FlatButton label="Accept" />
      </div>
    </Paper>);
}

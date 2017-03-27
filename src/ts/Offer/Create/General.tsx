import * as React from 'react';
import {
  Paper,
  TextField,
} from 'material-ui';

export default function General(props) {
  return (
    <Paper className="section">
      <TextField
        floatingLabelText="Offer Title"
        fullWidth={true}
      />
      <TextField
        floatingLabelText="Description (max. 555 characters)"
        multiLine={true}
        rows={3}
        fullWidth={true}
        rowsMax={3}
      />
    </Paper>);
}

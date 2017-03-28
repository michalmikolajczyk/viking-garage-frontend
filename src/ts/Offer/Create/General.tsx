import * as React from 'react';
import {
  Paper,
  TextField,
} from 'material-ui';
import { Form } from 'formsy-react';
import {
  FormsyCheckbox,
  FormsySelect,
  FormsyText,
  FormsyToggle,
} from 'formsy-material-ui/lib';

export default function General(props) {
  return (
    <Paper className="section">
      <FormsyText
        name="title"
        floatingLabelText="Offer Title"
        fullWidth={true}
        required={true}
        validationError="Shouldn't be empty!"
      />

      <FormsyText
        name="price"
        floatingLabelText="Price for one day (in USD)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />

      <FormsyText
        name="price"
        floatingLabelText="Maximum rental time (in days)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />

      <FormsyText
        name="price"
        floatingLabelText="Mimimum rental time (in days)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />


      <FormsyText
        name="brief"
        floatingLabelText="Description (max. 555 characters)"
        multiLine={true}
        rows={3}
        fullWidth={true}
        rowsMax={3}
        required={true}
        validationError="Shouldn't be empty!"
      />
    </Paper>);
}

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
        id="offer-create-title"
        name="title"
        floatingLabelText="Offer Title"
        fullWidth={true}
        required={true}
        validationError="Shouldn't be empty!"
      />
      <FormsyText
        id="offer-create-price"
        name="price"
        floatingLabelText="Price for one day (in USD)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />
      <FormsyText
        id="offer-create-maxRental"
        name="maxRental"
        floatingLabelText="Maximum rental time (in days)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />
      <FormsyText
        id="offer-create-minRental"
        name="minRental"
        floatingLabelText="Mimimum rental time (in days)"
        fullWidth={true}
        validations="isNumeric"
        required={true}
        validationError="Should be a number!"
      />
      <FormsyText
        id="offer-create-brief"
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

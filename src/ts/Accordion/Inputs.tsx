import * as React from 'react';
import * as _ from 'lodash';
import {
  TextField,
} from 'material-ui';
import { Form } from 'formsy-react';
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib';


const inputGenerator = (type, key, label) => {
  console.log(key);
  switch (type) {
    case 'number':
      return (
        <FormsyText
          validations="isNumeric"
          floatingLabelText={label}
          name={key}
          fullWidth={true}
          required={true}
        />);

    default:
      return (
        <FormsyText
          validations="isNumeric"
          floatingLabelText={label}
          name={key}
          fullWidth={true}
          required={true}
        />);
  }
}

const tableGenerator = table => _.map(table, (item, index) => {
  const label = item.label + (item.units ? ` (${item.units})` : '');
  const input = inputGenerator(item.type, item.key, label);
  return (
    <div className="row" key={index}>
      <div className="col">{input}</div>
    </div>);
});

export default function Inputs({ offer }) {
  return (
    <Form className="table">
      {tableGenerator(offer)}
    </Form>);
}

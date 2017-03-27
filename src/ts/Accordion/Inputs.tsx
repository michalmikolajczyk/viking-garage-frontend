import * as React from 'react';
import * as _ from 'lodash';
import {
  MenuItem,
} from 'material-ui';
import { Form } from 'formsy-react';
import {
  FormsyCheckbox,
  FormsySelect,
  FormsyText,
  FormsyToggle,
} from 'formsy-material-ui/lib';

// TODO: fetch select's from API, mockup for now
const select = {
  ignitionType: [
    'None',
    'Electric',
    'KickStarr',
  ],
}

const inputGenerator = (type, key, label) => {
  console.log(key);
  switch (type) {

    case 'number':
      return (
        <div className="col">
          <FormsyText
            validations="isNumeric"
            floatingLabelText={label}
            name={key}
            fullWidth={true}
            required={true}
          />
        </div>);

    case 'select':
      return (
      <div className="col">
          <FormsySelect
            floatingLabelText={label}
            name={key}
            fullWidth={true}
            required={true}
          >
            {select[key].map((s, i) => <MenuItem key={i} value={i} primaryText={s} />)}
          </FormsySelect>
        </div>);

    case 'toggle':
      return (
        <div className="col toggle">
          <FormsyToggle
            name={key}
            label={label}
          />
        </div>);

    case 'checkbox':
      return (
        <div className="col checkbox">
          <FormsyCheckbox
            name={key}
            label={label}
            labelPosition="left"
          />
        </div>);

    default:
      return (
        <div className="col">
          <FormsyText
            validations="isNumeric"
            floatingLabelText={label}
            name={key}
            fullWidth={true}
            required={true}
          />
        </div>);
  }
}

const tableGenerator = table => _.map(table, (item, index) => {
  const label = item.label + (item.units ? ` (${item.units})` : '');
  const input = inputGenerator(item.type, item.key, label);
  return (
    <div className="row" key={index}>
      {input}
    </div>);
});

export default function Inputs({ offer }) {
  return (
    <Form className="table">
      {tableGenerator(offer)}
    </Form>);
}

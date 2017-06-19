import * as React from 'react';
import * as _ from 'lodash';
import {
  MenuItem,
} from 'material-ui';
import {
  FormsyCheckbox,
  FormsySelect,
  FormsyText,
  FormsyToggle,
} from 'formsy-material-ui/lib';

// TODO: fetch select's from API, mockup for now
const select = {
  ignitionType: [
    'Electric',
    'Kick start',
  ],
  lights: [
    'None Lights',
    'Front Lights Only',
    'Full Lights',
  ],
};

const inputGenerator = (type, key, label) => {
  switch (type) {

    case 'number':
      return (
        <div className="col">
          <FormsyText
            id={`offer-create-${label}`}
            name={key}
            floatingLabelText={label}
            fullWidth={true}
            validations="isNumeric"
            required={true}
            validationError="Should be a number!"
          />
        </div>);

    case 'select':
      return (
      <div className="col select-col">
          <FormsySelect
            id={`offer-create-${label}`}
            floatingLabelText={label}
            name={key}
            fullWidth={true}
            required={true}
          >
            {select[key].map((s, i) => <MenuItem key={i} value={i} primaryText={s} />)}
          </FormsySelect>
        </div>);

    case 'checkbox':
      return (
        <div className="col checkbox">
          <FormsyCheckbox
            id={`offer-create-${label}`}
            name={key}
            label={label}
            labelPosition="left"
          />
        </div>);

    default:
      return (
        <div className="col">
          <FormsyText
            id={`offer-create-${label}`}
            validations="isNumeric"
            floatingLabelText={label}
            name={key}
            fullWidth={true}
            required={true}
          />
        </div>);
  }
};

const tableGenerator = table => _.map(table, (item, index) => {
  const label = item.label + (item.units ? ` (${item.units})` : '');
  const input = inputGenerator(item.type, item.key, label);
  return (
    <div className="row" key={index}>
      {input}
    </div>);
});

export default class Inputs extends React.Component<any, any> {
  private table;
  private header = null;

  constructor(props) {
    super(props);
    const { offer, type } = props;
    this.state = { open: !type };
    this.table = tableGenerator(offer);
    if (type) {
      this.header = this.headerGenerator(type);
    }
  }

  onChange = () => this.setState({ open: !this.state.open });

  headerGenerator(type) {
    return(
      <div className="header">
        <FormsyCheckbox
          name={type}
          label={type}
          labelPosition="left"
          onChange={this.onChange}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.header}
        <div className={'table' + (this.state.open ? '' : ' invisible')}>
          {this.table}
        </div>
      </div>);
  }
}

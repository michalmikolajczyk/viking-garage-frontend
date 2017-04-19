import * as React from 'react';
import {
  FontIcon,
  SelectField,
  MenuItem,
} from 'material-ui';
import debug from 'debug';
const log = debug('app:Select');
import i from '../i18n';

export default class Select extends React.Component<any, any> {
  private dataSource = [];
  constructor(props) {
    super(props);
    // select keeps values chosen by user
    this.state = { value: [] };
    this.onChange = this.onChange.bind(this);

    const createGroup = (values, group) => (
      values.map((value, index) => (
        <div
          key={index}
          label={value}
          value={`${group}#${value}`}
          className="select-item"
        >
          {value}
        </div>),
      )
    );

    this.dataSource = getDataSource().map((item, index) => (
        <optgroup key={index} label={item.group}>
          {createGroup(item.value, item.group)}
        </optgroup>
      ),
    );
  }

  onChange(value, name) {
    this.setState({ value });
    this.props.filter(value)
  }

  render() {
    const { value } = this.state;
    return (
      <div className="select">
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
        <div className="filter">
          <SelectField
            multiple={true}
            hintText="Select a name"
            value={this.state.values}
            onChange={this.onChange}
          >
            {this.dataSource}
          </SelectField>
        </div>
        <hr />
      </div>
    );
  }
}

function getDataSource() {
  return [
    {
      group: 'Motorcycle',
      value: [
        'Off-road',
        'Street',
        'Dual-sport',
        'Scooter',
        'Electric',
        'Small (children)',
      ],
    },
    {
      group: 'Mechanic',
      value: [
        'Off-road & dual-sport',
        'Street',
        'Electric',
        'Scooter',
      ],
    },
    {
      group: 'Coach / Instructor',
      value: [
        'Off-road',
        'Street',
      ],
    },
    {
      group: 'Guide',
      value: [
        'Off-road',
        'Street',
      ],
    },
    {
      group: 'Equipment',
      value: [
        'Off-road',
        'Street',
      ],
    },
    {
      group: 'Parts',
      value: [
        'Dirtbikes',
        'Streetbikes',
      ],
    },
    {
      group: 'Circuits',
      value: [
        'Motocross',
        'Enduro',
        'Race tracks',
      ],
    },
    {
      group: 'Other',
      value: [
        'Shops',
        'Events',
        'Clubs',
      ],
    },
  ]
}

import * as React from 'react';
import { FontIcon } from 'material-ui';
import { default as SuperSelect } from 'material-ui-superselectfield';

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
          value={group + value}
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

  selectionRenderer(val) {
    // rerender values displayed in the input
    return val.length
      ? <div className="selected">{val.map(({ _, label }) => label).join(', ')}</div>
      :  <div className="selected empty">Dirtbike</div>;
  }

  render() {
    const { value } = this.state;
    return (
      <div className="select">
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
        <div className="filter">
          <SuperSelect
            multiple={true}
            value={value}
            onChange={this.onChange}
            hintText="Select some values"
            selectionRenderer={this.selectionRenderer}
            fullWidth={true}
          >
            {this.dataSource}
          </SuperSelect>
        </div>
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

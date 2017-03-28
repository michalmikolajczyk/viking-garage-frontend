import * as React from 'react';
import { FontIcon } from 'material-ui';
import { default as SuperSelect } from 'material-ui-superselectfield';
import debug from 'debug';
const log = debug('app:Select');

const items = [
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
    group: 'Coach/Instructor',
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
];

export default class Select extends React.Component<any, any> {
  private selectItems = [];

  constructor(props) {
    super(props);
    // select keeps values chosen by user
    this.state = {
      select: [],
      value: [],
    };
    this.dataSourceNodes();
    this.handleSelection = this.handleSelection.bind(this);
  }

  private dataSource: any;
  dataSourceNodes() {
    const arrayOfItems = items.map((item, index) => {
      return [
        (<div
          style={{background: 'red'}}
          key={index * 100}
          value={index * 100}
          label={item.group}>{item.group}
        </div>),
        ...item.value.map((name, index) => <div key={index} value={index} label={name}>{name}</div>)
      ];
    });
    this.dataSource = [].concat.apply([], arrayOfItems);
  }

  handleSelection(value, name) {
    log('handle selection', value);
    this.setState({ value })
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
            onChange={this.handleSelection}
            hintText="Select some values"
            fullWidth={true}
          >
            {this.dataSource}
          </SuperSelect>
        </div>
      </div>
    );
  }
}

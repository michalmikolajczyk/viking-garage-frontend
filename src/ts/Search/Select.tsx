import * as React from 'react';
import * as _ from 'lodash';
import {
  FontIcon,
  SelectField,
  MenuItem,
  Toggle,
} from 'material-ui';
import debug from 'debug';
const log = debug('app:Select');
import i from '../i18n';

export default class Select extends React.Component<any, any> {
  state = {
    group: [],
    value: [],
  }

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      default:
        return `${values.length} names selected`;
    }
  }

  menuItems = () => _.keys(items).map((key, index) => (
    [
      <MenuItem
        key={key}
        value={key}
      >
        <Toggle
          className="menu-toggle"
          label={key}
        />
      </MenuItem>,
      ...items[key].map(subkey => (
        <MenuItem
          key={`${key}#${subkey}`}
          insetChildren={true}
          checked={false}
          value={subkey}
          primaryText={subkey}
        />
      )),
    ]
  ))

  onChange = (event, index, values) => {
    this.setState({ values });
    this.props.filter(values)
  }

  render() {
    return (
      <div className="select">
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
        <div className="filter">
          <SelectField
            multiple={true}
            hintText="Select type"
            value={[]}
            onChange={this.onChange}
            selectionRenderer={this.selectionRenderer}
          >
            {this.menuItems()}
          </SelectField>
        </div>
        <hr />
      </div>
    );
  }
}

const items = {
  'Motorcycle': [
    'Off-road',
    'Street',
    'Dual-sport',
    'Scooter',
    'Electric',
    'Small (children)',
  ],
  'Mechanic': [
    'Off-road & dual-sport',
    'Street',
    'Electric',
    'Scooter',
  ],
  'Coach / Instructor': [
    'Off-road',
    'Street',
  ],
  'Guide': [
    'Off-road',
    'Street',
  ],
  'Equipment': [
    'Off-road',
    'Street',
  ],
  'Parts': [
    'Dirtbikes',
    'Streetbikes',
  ],
  'Circuits': [
    'Motocross',
    'Enduro',
    'Race tracks',
  ],
  'Other': [
    'Shops',
    'Events',
    'Clubs',
  ],
};

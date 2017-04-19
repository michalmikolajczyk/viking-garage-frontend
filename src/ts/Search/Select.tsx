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
    values: [],
  };

  selectionRenderer = (values) => {
    return [...values].sort().reduce((acc, curr, index, arr) => {
      if (curr.indexOf('#') === -1) {
        return [curr, [...acc[1], `${curr.toUpperCase()}, `]]
      } else {
        return [acc[0], [...acc[1], `${curr.split('#')[1]}, `]]
      }
    }, [undefined, []])[1]
  }

  menuItems = () => items.map((item) => {
    if (item.indexOf('#') > -1) {
      return (
        <MenuItem
          key={item}
          insetChildren={true}
          checked={this.state.values.indexOf(item) > -1}
          value={item}
          primaryText={item.split('#')[1]}
        />)
    } else {
      return (
        <MenuItem
          key={item}
          value={item}
        >
          <Toggle
            label={item}
            className="menu-toggle"
            toggled={this.state.values.indexOf(item) > -1}
          />
        </MenuItem>
      )
    }
  })

  onChange = (event, index, values) => {
    // Toggle inside MenuItem invoke onChange twice - once with event object
    if (!_.isArray(values)) return;

    let diff = _.difference(this.state.values, values)[0];
    if (diff) {
      if (diff.indexOf('#') === -1) {
        return this.setState({
          values: values.filter(v => v.indexOf(diff) === -1)
        });
      } else {
        let group = diff.split('#')[0];
        return this.setState({
          values: values.filter(v => v !== group)
        });
      }
    }
    diff = _.difference(values, this.state.values)[0];
    if (diff) {
      if (diff.indexOf('#') === -1) {
        this.setState({
          values: [
            ...values,
            ...items.filter(i => i.indexOf(`${diff}#`) > -1),
          ]
        })
      } else {
        let group = diff.split('#')[0];
        let subset = items.filter(i => i.indexOf(`${group}#`) > -1)
        return this.setState({
          values: [
            ...values,
            ...(_.difference(subset, values).length === 0 ? [group] : []),
          ]
        })
      }
    }
    return this.setState({ values });
  }

  render() {
    return (
      <div className="select">
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
        <div className="filter">
          <SelectField
            multiple={true}
            hintText="Select type"
            value={this.state.values}
            onChange={this.onChange}
            selectionRenderer={this.selectionRenderer}
          >
            {this.menuItems()}
          </SelectField>
        </div>
      </div>
    );
  }
}

const rawItems = {
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

const items = _.flatten(_.keys(rawItems).map((item) => [
  item,
  ...rawItems[item].map(i => `${item}#${i}`),
]))

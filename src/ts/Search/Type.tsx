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
  state = { values: new Set() }

  selectionRenderer = (values) => [...values].sort().map(m => m.indexOf('#') > -1 ? m.split('#')[1] : m).join(', ');

  menuItems = () => items.map((item) => {
    if (item.indexOf('#') > -1) {
      return (
        <MenuItem
          key={item}
          insetChildren={true}
          checked={this.state.values.has(item)}
          value={item}
          primaryText={i(item.split('#')[1])}
        />);
    } else {
      return (
        <MenuItem
          key={item}
          value={item}
        >
          <Toggle
            label={i(item)}
            className="menu-toggle"
            toggled={this.state.values.has(item)}
          />
        </MenuItem>
      );
    }
  })

  isGroup(str: String): boolean {
    return str.indexOf('#') === -1;
  }

  save = (values) => {
    const set = new Set(values);
    this.props.filter(this.selectionRenderer(set).replace(/\s/g, ''));
    this.setState({ values: set });
  }

  onChange = (event, index, values) => {
    // Toggle inside MenuItem invoke onChange twice - once with event object
    if (!_.isArray(values)) return;
    if (this.state.values.size > values.length) {
      // user unchecked (removed) option
      const diff = [...this.state.values].filter(i => values.indexOf(i) === -1)[0];
      if (this.isGroup(diff)) {
        // unchecked group: remove all items from this group
        return this.save(values.filter(v => v.indexOf(diff) === -1));
      } else {
        // unchecked label: remove item & uncheck group toggle
        const group = diff.split('#')[0];
        return this.save(values.filter(v => v !== group));
      }
    } else {
      // user checked (added) new option
      const diff = values.filter(i => !this.state.values.has(i))[0];
      if (this.isGroup(diff)) {
        // checked group: add all items from group
        const val = values.concat(items.filter(i => i.indexOf(`${diff}#`) > -1));
        return this.save(val);
      } else {
        // checked label: add item & check if should add group toggle (if all items from group is checked)
        const groupLabel = diff.split('#')[0];
        const allFromGroup = items.filter(i => i.indexOf(`${groupLabel}#`) > -1);
        const group = _.difference(allFromGroup, values).length === 0 ? [groupLabel] : [];
        this.save([...values, ...group]);
      }
    }
  }

  render() {
    return (
      <div className="filter">
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
        <div className="input">
          <SelectField
            id="search-select"
            multiple={true}
            hintText={i('Select type...')}
            value={[...this.state.values]}
            onChange={this.onChange}
            selectionRenderer={this.selectionRenderer}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            labelStyle={{ paddingLeft: 30 }}
          >
            {this.menuItems()}
          </SelectField>
        </div>
      </div>
    );
  }
}

const rawItems = {
  Motorcycle: [
    'Off-road',
    'Street',
    'Dual-sport',
    'Scooter',
    'Electric',
    'Small',
  ],
// Hide for alfa release
  // Mechanic: [
  //   'Off-road & dual-sport',
  //   'Street',
  //   'Electric',
  //   'Scooter',
  // ],
  // 'Coach / Instructor': [
  //   'Off-road',
  //   'Street',
  // ],
  // Guide: [
  //   'Off-road',
  //   'Street',
  // ],
  // Equipment: [
  //   'Off-road',
  //   'Street',
  // ],
  // Parts: [
  //   'Dirtbikes',
  //   'Streetbikes',
  // ],
  // Circuits: [
  //   'Motocross',
  //   'Enduro',
  //   'Race tracks',
  // ],
  // Other: [
  //   'Shops',
  //   'Events',
  //   'Clubs',
  // ],
};

const items = _.flatten(_.keys(rawItems).map((item) => [
  item,
  ...rawItems[item].map(it => `${item}#${it}`),
]));

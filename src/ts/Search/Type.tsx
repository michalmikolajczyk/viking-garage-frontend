import * as React from 'react';
import * as _ from 'lodash';
import {
  MenuItem,
  Toggle,
} from 'material-ui';
import i from '../i18n';
import SelectFieldPure from './SelectFieldPure';

export default class Type extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { values: _.get(props, 'value.ind', new Set()) };
  }

  selectionRenderer = values => [...values].sort().map(m => m.indexOf('#') > -1 ? m.split('#')[1] : m).join(', ');

  componentWillReceiveProps(props) {
    if (_.has(props, 'value.ind') && this.state.value !== props.value.ind) {
      this.setState({ values: props.value.ind });
    }
  }

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

  isGroup(str: string): boolean {
    return str.indexOf('#') === -1;
  }

  save = (values) => {
    const set = new Set(values);
    const update = {
      ind: set,
      val: this.selectionRenderer(set).replace(/\s/g, ''),
    };
    return this.setState({ values: set }, this.props.filter(update));
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
      }
      // unchecked label: remove item & uncheck group toggle
      const group = diff.split('#')[0];
      return this.save(values.filter(v => v !== group));
    }
    // user checked (added) new option
    const diff = values.filter(i => !this.state.values.has(i))[0];
    if (this.isGroup(diff)) {
      // checked group: add all items from group
      const val = values.concat(items.filter(i => i.indexOf(`${diff}#`) > -1));
      return this.save(val);
    }
    // checked label: add item & check if should add group toggle (if all items from group is checked)
    const groupLabel = diff.split('#')[0];
    const allFromGroup = items.filter(i => i.indexOf(`${groupLabel}#`) > -1);
    const group = _.difference(allFromGroup, values).length === 0 ? [groupLabel] : [];
    return this.save([...values, ...group]);
  }

  render() {
    return (
      <SelectFieldPure
        value={[...this.state.values]}
        onChange={this.onChange}
        selectItems={this.menuItems}
        selectionRenderer={this.selectionRenderer}
      />
    );
  }
}

const rawItems = {
  Motorcycle: [
    // 'GROUPON®',
    'Off-road',
    'Street',
    'Dual-sport',
    'Scooter',
    'Electric',
    'Mini',
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

const items = _.flatten(_.keys(rawItems).map(item => [
  item,
  ...rawItems[item].map(it => `${item}#${it}`),
]));


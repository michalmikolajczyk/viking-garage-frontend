import * as React from 'react';
import * as _ from 'lodash';
import {
  SelectField,
  MenuItem,
} from 'material-ui';
import * as items from './mockup';
import debug from 'debug';
const log = debug('app:DetailForm');

export default class DetailForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const offer = items['ktm'];
    const price = Object.keys(offer.price.unit)[0]
    const priceState = offer.price.unit[price] + price;
    this.state = {
      price: priceState,
    };
    this.endDateChange = this.endDateChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.equipmentChange = this.equipmentChange.bind(this);
  }

  startDateChange(date) {
    log('start date changed', date);
    this.setState({ startDate: date })
  }

  endDateChange(date) {
    log('start date changed', date);
    this.setState({ endDate: date })
  }

  equipmentChange(equipment) {
    log('equipment changed', equipment);
    this.setState({ equipment });
  }

  priceChange(ev, index, value) {
    log('price changed', value);
    this.setState({ price: value });
  }

  render() {
    const {
      price,
    } = items['ktm'];

    const selectPrice = _.map(price.unit, (num, key) => (
      <MenuItem
        key={num + key}
        value={num + key}
        primaryText={`Base price: ${num} ${price.value} / ${key}`}
      >
      </MenuItem>));

    return (
      <div>
         <SelectField
            value={this.state.price}
            onChange={this.priceChange}
          >
          { selectPrice }
          </SelectField>
      </div>
    );
  }
}

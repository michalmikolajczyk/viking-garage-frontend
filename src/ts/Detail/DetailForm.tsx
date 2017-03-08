import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import {
  DatePicker,
  FontIcon,
  SelectField,
  TextField,
  MenuItem,
} from 'material-ui';
import debug from 'debug';
const log = debug('app:DetailForm');

export default class DetailForm extends React.Component<any, any> {
  private offer;

  constructor(props) {
    super(props);
    const { offer } = props;
    this.offer = offer;
    const price = offer.price.unit[Object.keys(offer.price.unit)[0]];
    this.state = {
      price,
      startDate: moment().toDate(),
      endDate: moment().add(3, 'days').toDate(),
      equipment: 1,
      total: 55 * 3,
    };
    this.endDateChange = this.endDateChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.equipmentChange = this.equipmentChange.bind(this);
  }

  recalculate() {
    const start = moment(this.state.startDate);
    const end = moment(this.state.endDate);
    const total = Math.abs(55 * end.diff(start, 'days'));
    this.setState({ total });
  }

  startDateChange(ev, date) {
    log('start date changed', date);
    this.setState({ startDate: date });
    this.recalculate();
  }

  endDateChange(ev, date) {
    log('start date changed', date);
    this.setState({ endDate: date });
    this.recalculate();
  }

  equipmentChange(ev, index, equipment) {
    log('equipment changed', equipment);
    this.setState({ equipment });
  }

  priceChange(ev, index, value) {
    log('price changed', value);
    this.setState({ price: value });
    this.recalculate();
  }

  render() {
    const {
      price,
    } = this.offer;

    const selectPrice = _.map(price.unit, (num, key) => (
      <MenuItem
        key={num}
        value={num}
        primaryText={`Base price: ${num} ${price.value} / ${key}`}
      >
      </MenuItem>));

    return (
      <div>
        <div className="field">
          <FontIcon className="fa fa-money" />
          <TextField
            id="base-price"
            value="Base price: 55$ / day"
            onChange={() => undefined}
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="material-icons">today</FontIcon>
          <DatePicker
            className="date-picker"
            autoOk={true}
            value={this.state.startDate}
            onChange={this.startDateChange}
            hintText="Today"
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="material-icons">date_range</FontIcon>
          <DatePicker
            className="date-picker"
            autoOk={true}
            value={this.state.endDate}
            onChange={this.endDateChange}
            hintText="19/01/2017"
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="fa fa-angle-down" />
          <SelectField
            value={this.state.equipment}
            onChange={this.equipmentChange}
            fullWidth={true}
          >
            <MenuItem key={1} value={1} primaryText="Equipment: Basic" />
            <MenuItem key={2} value={2} primaryText="Equipment: Semi" />
            <MenuItem key={3} value={3} primaryText="Equipment: Full" />
          </SelectField>
        </div>
        <div className="price">{`TOTAL: ${this.state.total} ${this.offer.price.value}`}</div>
        <button className="ride-btn">
          <span className="raido">&#5809;</span>
          <span>IDE</span>
        </button>
      </div>
    );
  }
}

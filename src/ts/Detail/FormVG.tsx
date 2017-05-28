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
import i from '../i18n';

export default class FormVG extends React.Component<any, any> {
  // default values (before fetched)
  days = 3;
  price = 55;

  constructor(props) {
    super(props);
    const { offer } = props;
    this.state = {
      offer,
      startDate: moment().toDate(),
      endDate: moment().add(this.days, 'days').toDate(),
      equipment: 1,
      total: this.price * this.days,
    };
  }

  componentWillReceiveProps(props) {
     const { offer } = props;
     this.setState({ offer });
  }

  recalculate = () => {
    const start = moment(this.state.startDate);
    const end = moment(this.state.endDate);
    const total = _.has(this.state.offer, 'price', this.price) * Math.abs(end.diff(start, 'days'));
    this.setState({ total });
  }

  startDateChange = (ev, date) => {
    log('start date changed', date);
    this.setState({ startDate: date });
    this.recalculate();
  }

  endDateChange = (ev, date) => {
    log('start date changed', date);
    this.setState({ endDate: date });
    this.recalculate();
  }

  equipmentChange = (ev, index, equipment) => {
    log('equipment changed', equipment);
    this.setState({ equipment });
  }

  priceChange = (ev, index, value) => {
    log('price changed', value);
    this.setState({ price: value });
    this.recalculate();
  }

  render() {
    const title = _.get(this.state.offer, 'title', '');
    const price = _.get(this.state.offer, 'price', this.price);
    return (
      <div className="child">
        <div className="title">{title}</div>
        <div className="field">
          <FontIcon className="fa fa-money" />
          <TextField
            name="base-price"
            value={`${i('Base price')}: ${price} $ / ${i('day')}`}
            onChange={() => undefined}
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="material-icons">today</FontIcon>
          <DatePicker
            name="start-date"
            className="date-picker"
            autoOk={true}
            value={this.state.startDate}
            onChange={this.startDateChange}
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="material-icons">date_range</FontIcon>
          <DatePicker
            name="end-date"
            className="date-picker"
            autoOk={true}
            value={this.state.endDate}
            onChange={this.endDateChange}
            fullWidth={true}
          />
        </div>
        <div className="field">
          <FontIcon className="fa fa-angle-down" />
          <SelectField
            className="equipment"
            value={this.state.equipment}
            onChange={this.equipmentChange}
            fullWidth={true}
          >
            <MenuItem key={1} value={1} primaryText={`${i('Equipment')}: ${i('Basic')}`} />
            <MenuItem key={2} value={2} primaryText={`${i('Equipment')}: ${i('Full')}`} />
          </SelectField>
        </div>
        <div className="price">{`${i('Total')}: ${this.state.total} $`}</div>
      </div>
    );
  }
}

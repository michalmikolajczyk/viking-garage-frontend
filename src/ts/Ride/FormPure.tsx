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
import i from '../i18n';

export default class FormPure extends React.Component<any, any> {
  days = 3;
  price = 35;

  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate || moment().toDate(),
      endDate: props.endDate || moment().add(this.days, 'days').toDate(),
      equipment: props.equipment || 1,
    };
  }

  getTotal = () => {
    const start = moment(this.state.startDate);
    const end = moment(this.state.endDate);
    return this.getPrice() * (Math.abs(end.diff(start, 'days')) + 1);
  }

  getPrice = () => _.get(this.props.offer, 'price', this.price)

  startDateChange = (ev, startDate) => this.setState({ startDate });

  endDateChange = (ev, endDate) => this.setState({ endDate });

  equipmentChange = (ev, index, equipment) => this.setState({ equipment });

  render() {
    return (
      <div>
        <div className="field empty">
          <FontIcon className="fa fa-money" />
          <div>
            {`${i('Base price')}: ${this.getPrice()} $ / ${i('day')}`}
          </div>
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
        <div className="field empty">
          {`${i('Total')}: ${this.getTotal()} $`}
        </div>
      </div>
    );
  }
}

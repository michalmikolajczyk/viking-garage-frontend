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

export default class FormVG extends React.Component<any, any> {
  private offer: any;

  constructor(props) {
    super(props);
    const { offer } = props;
    this.offer = offer;
    const price = offer.price.day;
    this.state = {
      price,
      startDate: moment().toDate(),
      endDate: moment().add(3, 'days').toDate(),
      equipment: 1,
      total: 55 * 3,
      form: '',
    };
    this.endDateChange = this.endDateChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.equipmentChange = this.equipmentChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleScroll();
  }

  componentWillUnmount() {
    this.handleScroll = () => null;
  }

  handleScroll() {
    window.requestAnimationFrame(this.handleScroll);
    const side = document.querySelector('#detail-side').clientHeight;
    const wrap = document.querySelector('#detail-wrap').clientHeight;
    const diff = wrap - side - 114;
    const top = 54;
    if (window.scrollY <= top && this.state.form !== '') {
      return this.setState({ form: '' });
    }
    if (window.scrollY > top && window.scrollY < diff && this.state.form !== 'fixed') {
      return this.setState({ form: 'fixed' });
    }
    if (window.scrollY >= diff && this.state.form !== 'absolute') {
      return this.setState({ form: 'absolute' });
    }
  }

  recalculate() {
    const start = moment(this.state.startDate);
    const end = moment(this.state.endDate);
    const total = 55 * Math.abs(end.diff(start, 'days'));
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
      title,
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
      <div id="detail-wrap" className="detail-form">
        <div id="detail-side" className={`${this.state.form}`}>
        <div className="child">
          <div className="title">{title}</div>
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
              className="equipment"
              value={this.state.equipment}
              onChange={this.equipmentChange}
              fullWidth={true}
            >
              <MenuItem key={1} value={1} primaryText="Equipment: Basic" />
              <MenuItem key={2} value={2} primaryText="Equipment: Semi" />
              <MenuItem key={3} value={3} primaryText="Equipment: Full" />
            </SelectField>
          </div>
          <div className="price">{`TOTAL: ${this.state.total} USD`}</div>
          <button className="ride-btn">
            <span className="raido">&#5809;</span>
            <span>IDE</span>
          </button>
          </div>
        </div>
      </div>
    );
  }
}

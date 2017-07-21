import * as React from 'react';
import * as _ from 'lodash';
import * as fx from 'money';
import * as moment from 'moment';
import FormDay from './FormDay';
import FormHour from './FormHour';
import FormWrap from './FormWrap';
import Contact from '../Contact';
import Raido from '../Raido';
import {
  countTotal,
  renderUnit,
} from '../helpers/hours';
import i from '../i18n';

export default class FormVG extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const { start, end } = props;
    this.state = {
      startDate: start && moment.unix(start).toDate(),
      endDate: end && moment.unix(end).toDate(),
      equipment: 1,
    };
  }

  getTitle = offer => _.get(offer, 'title', '');
  getPrice = offer => renderUnit(offer);
  getTotal = offer => countTotal(offer, this.getRange());
  getRange = () => {
    if (this.props.hour && this.state.interval) return this.state.interval.val;
    if (!this.props.hour && this.state.startDate && this.state.endDate) return Math.abs(moment(this.state.endDate).diff(moment(this.state.startDate), 'days')) + 1;
    return 0;
  }

  endDateChange = (ev, endDate) => this.setState({ endDate });
  intervalChange = (ev, interval) => this.setState({ interval });
  startDateChange = (ev, startDate) => this.setState({ startDate });
  startHourChange = (ev, startHour) => this.setState({ startHour });
  equipmentChange = (ev, index, equipment) => this.setState({ equipment });

  getMessage = () => {
    const endOrHour = this.props.hour
    ? `Start hour: ${_.get(this.state, 'startHour.val', 'no data')}:00`
    : `End date: ${(this.state.endDate || 'no date')}`;
    return `RIDE REQUEST - ${this.getTitle(this.props.offer)}
Offer: ${location.hostname}/offer/${this.props.offer.id},
Start date: ${this.state.startDate || 'no date'},
${endOrHour},
Equipment: ${this.state.equipment},
Price: ${this.getPrice(this.props.offer)},
Total: ${this.getTotal(this.props.offer)},
Range: ${this.getRange()} ${this.props.hour ? 'hours' : 'days'}
Currency: ${i('USD')}`
  }

  render() {
    const {
      hour,
      offer,
    } = this.props;
    const title = this.getTitle(offer);
    const price = this.getPrice(offer);
    const total = this.getTotal(offer);

    const formData = {
      ...this.state,
      price,
      total,
      endDateChange: this.endDateChange,
      intervalChange: this.intervalChange,
      startDateChange: this.startDateChange,
      startHourChange: this.startHourChange,
      equipmentChange: this.equipmentChange,
    };

    const form = hour ? <FormHour {...formData} /> : <FormDay  {...formData} />;

    return (
      <FormWrap>
        <div className="title mobile-tablet-hid">{title}</div>
        {form}
        <div>
          <Contact
            type="ride"
            button={<div className="btn-main btn-ride"><Raido />IDE</div>}
            message={this.getMessage}
            success={{
              title: i('Your ride is booked.'),
              body: i('Our team will contact you within the next 24 hours in order to confirm it and discuss the details.\n\nGet ready for an unforgettable experience with VIKING GARAGE!'),
            }}
          >
            <div className="title">
              {title}
            </div>
            {form}
            <div className="text">
              {i('If you are interested in that ride, leave us your details - our team will contact you:')}
            </div>
          </Contact>
        </div>
      </FormWrap>
    );
  }
}

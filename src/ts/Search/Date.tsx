import * as React from 'react';
import * as moment from 'moment';
import {
  DatePicker,
  FontIcon,
} from 'material-ui';
import i from '../i18n';

export default class DateVG extends React.Component<any, any> {
  state = {
    start: null,
    end: null,
  }

  onChangeStart = (event, date) => {
    if (this.state.end) this.props.filter({ start: date, end: this.state.end });
    this.setState({ start: date });
  }

  onChangeEnd = (event, date) => {
    if (this.state.start) this.props.filter({ start: this.state.start, end: date });
    this.setState({ end: date });
  }

  shouldDisableDateStart = (date) => {
    if (!this.state.end) return moment().isAfter(date, 'days');
    return !moment(date).isBetween(moment(), this.state.end, 'days', '[]');
  }

  shouldDisableDateEnd = (date) => {
    if (!this.state.start) return moment().isAfter(date, 'days');
    return moment(this.state.start).isAfter(date, 'days');
  }

  render() {
    return (
      <div className="date-wrap">
        <div className="filter">
          <FontIcon className="fa fa-calendar-check-o" />
          <DatePicker
            id="search-date-start"
            className="input"
            autoOk={true}
            onChange={this.onChangeStart}
            hintText={i('Start Date')}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            inputStyle={{ paddingLeft: 30 }}
            shouldDisableDate={this.shouldDisableDateStart}
          />
        </div>
        <div className="filter">
          <FontIcon className="fa fa-calendar" />
          <DatePicker
            id="search-date-end"
            className="input"
            autoOk={true}
            onChange={this.onChangeEnd}
            hintText={i('End Date')}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            inputStyle={{ paddingLeft: 30 }}
            shouldDisableDate={this.shouldDisableDateEnd}
          />
        </div>
      </div>
    );
  }
}

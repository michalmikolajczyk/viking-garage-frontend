import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import i from '../i18n';
import DatePickerPure from './DatePickerPure';

export default class DateVG extends React.Component<any, any> {

  onChangeStart = (event, date) => this.props.filter({ start: date });

  onChangeEnd = (event, date) => this.props.filter({ end: date });

  shouldDisableDateStart = (date) => {
    if (!_.has(this.props, 'value.end')) return moment().isAfter(date, 'days');
    return !moment(date).isBetween(moment(), this.props.value.end, 'days', '[]');
  }

  shouldDisableDateEnd = (date) => {
    if (!_.has(this.props, 'value.start')) return moment().isAfter(date, 'days');
    return moment(this.props.value.start).isAfter(date, 'days');
  }

  render() {
    return (
      <div className="date-wrap">
        <DatePickerPure
          icon="today"
          subId="search-date-start"
          value={_.get(this.props, 'value.start')}
          hintText={i('Start Date')}
          onChange={this.onChangeStart}
          shouldDisableDate={this.shouldDisableDateStart}
        />
        <DatePickerPure
          icon="date_range"
          subId="search-date-end"
          value={_.get(this.props, 'value.end')}
          hintText={i('Start Date')}
          onChange={this.onChangeEnd}
          shouldDisableDate={this.shouldDisableDateEnd}
        />
      </div>
    );
  }
}

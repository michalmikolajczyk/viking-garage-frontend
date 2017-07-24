import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import { DatePicker } from 'material-ui';
import i from '../i18n';
import IconWrap from '../IconWrap';

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
        <div className="filter">
          <IconWrap icon="today" />
          <DatePicker
            id="search-date-start"
            className="input"
            value={_.get(this.props, 'value.start')}
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
          <IconWrap icon="date_range" />
          <DatePicker
            id="search-date-end"
            className="input"
            value={_.get(this.props, 'value.end')}
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

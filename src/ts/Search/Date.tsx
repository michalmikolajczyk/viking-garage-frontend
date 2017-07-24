import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import { DatePicker } from 'material-ui';
import i from '../i18n';
import IconWrap from '../IconWrap';

export default function DateVG(props) {
  const {
    value,
    filter,
  } = props;

  const end = _.get(value, 'end');
  const start = _.get(value, 'start');

  function onChangeStart(event, date) {
    filter({ start: date });
  }

  function onChangeEnd(event, date) {
    filter({ end: date });
  }

  function shouldDisableDateStart(date) {
    if (!end) return moment().isAfter(date, 'days');
    return !moment(date).isBetween(moment(), end, 'days', '[]');
  }

  function shouldDisableDateEnd(date) {
    if (!start) return moment().isAfter(date, 'days');
    return moment(start).isAfter(date, 'days');
  }

  return (
    <div className="date-wrap">
      <div className="filter">
        <IconWrap icon="today" />
        <DatePicker
          id="search-date-start"
          className="input"
          value={start}
          autoOk={true}
          onChange={onChangeStart}
          hintText={i('Start Date')}
          fullWidth={true}
          hintStyle={{ paddingLeft: 30 }}
          inputStyle={{ paddingLeft: 30 }}
          shouldDisableDate={shouldDisableDateStart}
        />
      </div>
      <div className="filter">
        <IconWrap icon="date_range" />
        <DatePicker
          id="search-date-end"
          className="input"
          value={end}
          autoOk={true}
          onChange={onChangeEnd}
          hintText={i('End Date')}
          fullWidth={true}
          hintStyle={{ paddingLeft: 30 }}
          inputStyle={{ paddingLeft: 30 }}
          shouldDisableDate={shouldDisableDateEnd}
        />
      </div>
    </div>
  );
}

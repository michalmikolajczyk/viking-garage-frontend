import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as fx from 'money';
import {
  DatePicker,
  TimePicker,
  FontIcon,
  SelectField,
  MenuItem,
} from 'material-ui';
import IconWrap from '../IconWrap';
import i from '../i18n';

export default function FormHour(props) {
  const {
    price,
    total,
    endDate,
    interval,
    startDate,
    equipment,
    endDateChange,
    intervalChange,
    equipmentChange,
    startDateChange,
  } = props;

  function shouldDisableDateStart(date) {
    return moment().isAfter(date, 'days');
  }

  const hours = [1, 2, 3, 5, 8];

  function onIntervalChange(ev, key) {
    intervalChange(ev, { val: hours[key], ind: key });
  }

  const timeFormat = i() === 'en' ? 'ampm' : '24hr';

  return (
    <div className="form-pure">
      <div className="field empty">
        <FontIcon className="fa fa-money" />
        <div className="text">
          {`${i('Base price')}: ${price}`}
        </div>
      </div>
      <div className="field">
        <IconWrap icon="today" />
        <DatePicker
          id="form-start-date"
          name="start-date"
          className="date-picker"
          autoOk={true}
          value={startDate}
          hintText={i('Start Date')}
          onChange={startDateChange}
          fullWidth={true}
          hintStyle={{ paddingLeft: 35 }}
          inputStyle={{ paddingLeft: 35 }}
          shouldDisableDate={shouldDisableDateStart}
        />
      </div>
      <div className="field">
        <IconWrap icon="access_time" />
        <TimePicker
          id="form-end-date"
          name="end-date"
          className="date-picker"
          format={timeFormat}
          autoOk={true}
          value={endDate}
          minutesStep={60}
          hintText={i('Start Hour')}
          onChange={endDateChange}
          fullWidth={true}
          hintStyle={{ paddingLeft: 35 }}
          inputStyle={{ paddingLeft: 35 }}
        />
      </div>
      <div className="field">
        <IconWrap icon="timelapse" />
        <SelectField
          id="form-equipment"
          className="equipment"
          value={_.get(interval, 'ind')}
          onChange={onIntervalChange}
          autoWidth={true}
          fullWidth={true}
          hintText={i('Duration')}
          hintStyle={{ paddingLeft: 35 }}
          labelStyle={{ paddingLeft: 35 }}
        >
          {hours.map((val, ind) => <MenuItem key={ind} value={ind} primaryText={moment.duration(val, 'hour').humanize()} />)}
        </SelectField>
      </div>
      <div className="field empty">
        {`${i('Total')}: ${total}`}
      </div>
    </div>
  );
}

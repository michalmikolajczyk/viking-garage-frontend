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
    startHour,
    startDate,
    equipment,
    intervalChange,
    equipmentChange,
    startHourChange,
    startDateChange,
  } = props;

  function shouldDisableDateStart(date) {
    return moment().isAfter(date, 'days');
  }

  const hoursRide = [1, 2, 3, 5, 8];

  const hoursMeet = _.range(1, 24);

  function onIntervalChange(ev, key) {
    const value = { val: hoursRide[key], ind: key }
    intervalChange(ev, value);
  }

  function onStartHourChange(ev, key) {
    const value = { val: hoursMeet[key], ind: key };
    startHourChange(ev, value);
  }

  function selectionRendererMeet(ind) {
    return `Meet up at ${moment(hoursMeet[ind], 'H').format('H:mm')}`;
  }

  function selectionRendererRide(ind) {
    return `Ride for ${moment.duration(hoursRide[ind], 'hour').humanize()}`;
  }

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
        <IconWrap icon="timelapse" />
        <SelectField
          id="form-hourride"
          className="hourride"
          value={_.get(interval, 'ind')}
          onChange={onIntervalChange}
          autoWidth={true}
          fullWidth={true}
          hintText={i('Ride for...')}
          hintStyle={{ paddingLeft: 35 }}
          labelStyle={{ paddingLeft: 35 }}
          selectionRenderer={selectionRendererRide}
        >
          {hoursRide.map((val, ind) => <MenuItem key={ind} value={ind} primaryText={moment.duration(val, 'hour').humanize()} />)}
        </SelectField>
      </div>
      <div className="field">
        <IconWrap icon="access_time" />
        <SelectField
          id="form-hourmeet"
          className="hourmeet"
          value={_.get(startHour, 'ind')}
          onChange={onStartHourChange}
          maxHeight={300}
          autoWidth={true}
          fullWidth={true}
          hintText={i('Meet up at...')}
          hintStyle={{ paddingLeft: 35 }}
          labelStyle={{ paddingLeft: 35 }}
          selectionRenderer={selectionRendererMeet}
        >
          {hoursMeet.map((val, ind) => <MenuItem key={ind} value={ind} primaryText={moment(val, 'H').format('H:mm')} />)}
        </SelectField>
      </div>
      <div className="field empty">
        {`${i('Total')}: ${total}`}
      </div>
    </div>
  );
}

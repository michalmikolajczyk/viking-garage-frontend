import * as React from 'react';
import * as moment from 'moment';
import * as fx from 'money';
import {
  DatePicker,
  FontIcon,
  SelectField,
  MenuItem,
} from 'material-ui';
import IconWrap from '../IconWrap';
import i from '../i18n';

export default function FormPure(props) {
  const {
    price,
    total,
    endDate,
    equipment,
    startDate,
    endDateChange,
    equipmentChange,
    startDateChange,
  } = props;

  function shouldDisableDateStart(date) {
    if (!endDate) return moment().isAfter(date, 'days');
    return !moment(date).isBetween(moment(), endDate, 'days', '[]');
  }

  function shouldDisableDateEnd(date) {
    if (!startDate) return moment().isAfter(date, 'days');
    return moment(startDate).isAfter(date, 'days');
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
        <IconWrap icon="date_range" />
        <DatePicker
          id="form-end-date"
          name="end-date"
          className="date-picker"
          autoOk={true}
          value={endDate}
          hintText={i('End Date')}
          onChange={endDateChange}
          fullWidth={true}
          hintStyle={{ paddingLeft: 35 }}
          inputStyle={{ paddingLeft: 35 }}
          shouldDisableDate={shouldDisableDateEnd}
        />
      </div>
      <div className="field">
        <FontIcon className="fa fa-angle-down" />
        <SelectField
          id="form-equipment"
          className="equipment"
          value={equipment}
          onChange={equipmentChange}
          fullWidth={true}
          hintStyle={{ paddingLeft: 35 }}
          labelStyle={{ paddingLeft: 35 }}
        >
          <MenuItem key={1} value={1} primaryText={`${i('Equipment')}: ${i('Basic')}`} />
          <MenuItem key={2} value={2} primaryText={`${i('Equipment')}: ${i('Full')}`} />
        </SelectField>
      </div>
      <div className="field empty">
        {`${i('Total')}: ${total}`}
      </div>
    </div>
  );
}

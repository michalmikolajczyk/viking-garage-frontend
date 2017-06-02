import * as React from 'react';
import * as fx from 'money';
import {
  DatePicker,
  FontIcon,
  SelectField,
  MenuItem,
} from 'material-ui';
import i from '../i18n';

export default function FormPure(props){
  const {
    price,
    total,
    endDate,
    equipment,
    startDate,
    endDateChange,
    equipmentChange,
    startDateChange,
  } = props

  const localPrice = fx(price).to(i('USD')).toFixed(2);
  const localTotal = fx(total).to(i('USD')).toFixed(2);
  return (
    <div>
      <div className="field empty">
        <FontIcon className="fa fa-money" />
        <div>
          {`${i('Base price')}: ${localPrice} ${i('USD')} / ${i('day')}`}
        </div>
      </div>
      <div className="field">
        <FontIcon className="material-icons">today</FontIcon>
        <DatePicker
          name="start-date"
          className="date-picker"
          autoOk={true}
          value={startDate}
          onChange={startDateChange}
          fullWidth={true}
        />
      </div>
      <div className="field">
        <FontIcon className="material-icons">date_range</FontIcon>
        <DatePicker
          name="end-date"
          className="date-picker"
          autoOk={true}
          value={endDate}
          onChange={endDateChange}
          fullWidth={true}
        />
      </div>
      <div className="field">
        <FontIcon className="fa fa-angle-down" />
        <SelectField
          className="equipment"
          value={equipment}
          onChange={equipmentChange}
          fullWidth={true}
        >
          <MenuItem key={1} value={1} primaryText={`${i('Equipment')}: ${i('Basic')}`} />
          <MenuItem key={2} value={2} primaryText={`${i('Equipment')}: ${i('Full')}`} />
        </SelectField>
      </div>
      <div className="field empty">
        {`${i('Total')}: ${localTotal} ${i('USD')}`}
      </div>
    </div>
  );

}

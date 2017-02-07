import React from 'react';
import {
  DatePicker,
  FontIcon,
  TextField,
  SelectField,
} from 'material-ui';
import Select from './Select';
import Location from './Location';

export default function Search(props) {

  const {
    selectItems,
    locationFilter,
    selectFilter,
    startDateFilter,
    endDateFilter,
  } = props;

  return (
    <div className="cont search">
      <FontIcon className="material-icons">location_on</FontIcon>
      <Location
        filter={locationFilter}
        className="text-field location" />
      <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
      <Select
        selectItems={selectItems}
        className="text-field select"
        hintText="Dirtbike"
      />
      <FontIcon className="material-icons">today</FontIcon>
      <DatePicker
        className="text-field start-date"
        hintText="Today" />
      <FontIcon className="material-icons">date_range</FontIcon>
      <DatePicker
        className="text-field end-date"
        hintText="19/01/2017" />
    </div>
  );
}

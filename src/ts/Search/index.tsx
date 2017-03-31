import * as React from 'react';
import { FontIcon } from 'material-ui';
import Date from './Date';
import Select from './Select';
import Location from './Location';

export default function Signin(props) {

  const {
    locationFilter,
    selectFilter,
    dateFilter,
  } = props;

  return (
    <div className="search cont">
      <Location
        icon="location_on"
        filter={locationFilter} />
      <Select
        filter={selectFilter}
      />
      <Date filter={dateFilter} />
    </div>
  );
}

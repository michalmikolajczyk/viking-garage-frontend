import * as React from 'react';
import { FontIcon } from 'material-ui';
import Date from './Date';
import Type from './Type';
import Location from './Location';
import Distance from './Distance';

export default function Search(props) {
  const {
    locationFilter,
    distanceFilter,
    typeFilter,
    dateFilter,
  } = props;

  return (
    <div className="search">
      <Location
        icon="location_on"
        filter={locationFilter} />
      <Distance filter={distanceFilter} />
      <Type filter={typeFilter} />
      <Date filter={dateFilter} />
    </div>
  );
}

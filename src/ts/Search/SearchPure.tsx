import * as React from 'react';
import { FontIcon } from 'material-ui';
import Date from './Date';
import Type from './Type';
import Location from './Location';
import Distance from './Distance';

interface SearchPureProps {
  date: any;
  type: any;
  location: any;
  distance: any;
  typeFilter: (type: any) => void;
  dateFilter: (date: any) => void;
  locationFilter: (location: any) => void;
  distanceFilter: (distance: any) => void;
}

export default function SearchPure(props: SearchPureProps) {
  const {
    date,
    type,
    location,
    distance,
    dateFilter,
    typeFilter,
    distanceFilter,
    locationFilter,
  } = props;

  return (
    <div className="search">
      <Location
        value={location}
        filter={locationFilter}
      />
      <Distance
        value={distance}
        filter={distanceFilter}
      />
      <Type
        value={type}
        filter={typeFilter}
      />
      <Date
        value={date}
        filter={dateFilter}
      />
    </div>
  );
}

import * as React from 'react';
import { FontIcon } from 'material-ui';
import {
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import Date from './Date';
import Type from './Type';
import Location from './Location';
import Distance from './Distance';

interface SearchPureProps {
  filtersFuncs: IFiltersFuncs;
  filtersValue: IFiltersValue;
}

export default function SearchPure(props: SearchPureProps) {
  const {
    filtersFuncs,
    filtersValue,
  } = props;

  const {
    date,
    type,
    location,
    distance,
  } = filtersValue;

  const {
    dateFilter,
    typeFilter,
    distanceFilter,
    locationFilter,
  } = filtersFuncs;

  return (
    <div className="search">
      <Location
        value={location}
        filter={locationFilter}
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

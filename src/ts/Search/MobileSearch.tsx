import * as React from 'react';
import {
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import SearchPure from './SearchPure';

interface MobileSearchProps {
  open: boolean;
  toggle: () => void;
  filtersFuncs: IFiltersFuncs;
  filtersValue: IFiltersValue;
}

export default function MobileSearch(props: MobileSearchProps) {
  const {
    open,
    toggle,
  } = props;

  return (
    <div className={`mobile-search ${open ? 'open' : ''}`}>
      <div className="wrap">
        <SearchPure {...props} />
        <button className="btn-main right" onClick={toggle}>
          <div>OK</div>
        </button>
      </div>
    </div>
  );
}

import * as React from 'react';
import SearchPure from './SearchPure';

interface MobileSearchProps {
  open: boolean;
  toggle: () => void;
  date: any;
  type: any;
  location: any;
  distance: any;
  typeFilter: (type: any) => void;
  dateFilter: (date: any) => void;
  locationFilter: (location: any) => void;
  distanceFilter: (distance: any) => void;
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

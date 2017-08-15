export interface IDate {
  start: string;
  end: string;
}

export interface IType {
  val: string;
  ind: string;
}

export type TDistance = number;

export interface ILocation {
  lat: number;
  lng: number;
  val: string;
}

export interface IFiltersFuncs {
  typeFilter: (type: IType) => void;
  dateFilter: (date: IDate) => void;
  distanceFilter: (distance: TDistance) => void;
  locationFilter: (location: ILocation) => void;
}

export interface IFiltersValue {
  date: IDate;
  type: IType;
  distance: TDistance;
  location: ILocation;
}

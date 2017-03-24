import * as React from 'react';
import * as _ from 'lodash';

export default function Table({ items }) {
  const table = _.map(items, (item, index) => (
    <div className="row" key={index}>
      <div className="col">{item.label}</div>
      <div className="col">{item.value}</div>
    </div>));

  return (
    <div className="table">
      {table}
    </div>);
}

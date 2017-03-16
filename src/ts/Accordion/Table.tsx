import * as React from 'react';
import * as _ from 'lodash';

export default function Table({ items }) {
  const half = Math.ceil(items.length / 2);
  const table = _.map(_.range(half), index => (
    <div className="tr" key={index}>
      <div className="td">
        <div className="col">{items[index][0]}</div>
        <div className="col">{items[index][1]}</div>
      </div>
      <div className="td">
        <div className="col">{items[index + half] && items[index + half][0]}</div>
        <div className="col">{items[index + half] && items[index + half][1]}</div>
      </div>
    </div>));

  return (
    <div className="table">
      {table}
    </div>);
}

import * as React from 'react';
import * as _ from 'lodash';
import Accordion from './Accordion';

export default function DetailList({ offer }) {
  const { specs } = offer;
  const accordions = _.map(specs, (item, index) => (
      <Accordion
        key={index}
        open={index === 0}
        header={item.title}
        items={item.value}
      />
    ));
  return <div>{accordions}</div>;
}

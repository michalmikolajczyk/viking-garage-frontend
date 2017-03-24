import * as React from 'react';
import * as _ from 'lodash';
import Accordion from '../Accordion';
import Offerer from './Offerer';
import parser from '../helpers/parser';

const tabs = [
  {
    title: 'Motorcycle additional specs',
    type: 'motorcycle',
    where: 'detail',
  },
  {
    title: 'Mechanical state',
    type: 'mechanical',
    where: 'detail',
  },
  {
    title: 'Available protection',
    type: 'protection',
    where: 'other',
  },
  {
    title: 'Accessories',
    type: 'accessories',
    where: 'other',
  },
  {
    title: 'Helmet specs',
    type: 'helmet',
    where: 'helmet',
  },
  {
    title: 'Optional services',
    type: 'services',
    where: 'other',
  },
];

export default function ListVG({ offer }) {
  const accordions = _.map(tabs, (tab, index) => {
    const items = _.get(offer, tab.where);
    if (items === null) return null;
    return (
      <Accordion
        key={index}
        open={false}
        header={tab.title}
        items={parser(tab.type, items)}
      />
    );
  });
  return (
    <div>
      {accordions}
      <Offerer offer={offer} />
    </div>);
}

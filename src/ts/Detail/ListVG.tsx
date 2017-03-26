import * as React from 'react';
import * as _ from 'lodash';
import Accordion from '../Accordion';
import Offerer from './Offerer';
import parser from '../helpers/parser';

const tabs = [
  {
    title: 'Motorcycle additional specs',
    schema: 'motorcycle',
    where: 'motorcycles',
  },
  {
    title: 'Mechanical state',
    schema: 'mechanical',
    where: 'motorcycles',
  },
  {
    title: 'Available protection',
    schema: 'protection',
    where: 'protections',
  },
  {
    title: 'Accessories',
    schema: 'accessories',
    where: 'accessories',
  },
  {
    title: 'Helmet specs',
    schema: 'helmet',
    where: 'helmets',
  },
  {
    title: 'Optional services',
    schema: 'services',
    where: 'services',
  },
];

export default function ListVG({ offer }) {
  const accordions = _.map(tabs, (tab, index) => {
    const items = _.get(offer, tab.where);
    if (items === null || items[0] === undefined) return null;
    return (
      <Accordion
        key={index}
        open={false}
        header={tab.title}
        offer={parser(tab.schema, items[0])}
      />
    );
  });
  return (
    <div>
      {accordions}
      <Offerer offer={offer} />
    </div>);
}

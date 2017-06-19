import * as React from 'react';
import * as _ from 'lodash';
import i from '../i18n';
import Accordion from '../Accordion';
import Offerer from './Offerer';
import parser from '../helpers/parser';

const tabs = [
  {
    title: i('Motorcycle additional specs'),
    schema: 'motorcycle',
    where: 'motorcycles',
  },
  {
    title: i('Mechanical state'),
    schema: 'mechanical',
    where: 'motorcycles',
  },
  {
    title: i('Available protection'),
    schema: 'protection',
    where: 'protections',
  },
  {
    title: i('Accessories'),
    schema: 'accessories',
    where: 'accessories',
  },
  {
    title: i('Helmet specs'),
    schema: 'helmet',
    where: 'helmets',
  },
  {
    title: i('Optional services'),
    schema: 'services',
    where: 'services',
  },
];

export default function ListVG({ offer }) {
  const accordions = _.map(tabs, (tab, index) => {
    const items = _.get(offer, tab.where);
    if (!items || !items[0]) return null;
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
    <div className="accordions">
      {accordions}
      <Offerer offer={offer} />
    </div>);
}

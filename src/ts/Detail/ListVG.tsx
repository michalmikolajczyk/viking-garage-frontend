import * as React from 'react';
import * as _ from 'lodash';
import i from '../i18n';
import Accordion from '../Accordion';
import Offerer from './Offerer';
import parser from '../helpers/parser';

const tabs = [
  {
    title: i('Motorcycle additional specs'),
    type: 'motorcycle',
    where: 'detail',
  },
  {
    title: i('Mechanical state'),
    type: 'mechanical',
    where: 'detail',
  },
  {
    title: i('Available protection'),
    type: 'protection',
    where: 'other',
  },
  {
    title: i('Accessories'),
    type: 'accessories',
    where: 'other',
  },
  {
    title: i('Helmet specs'),
    type: 'helmet',
    where: 'helmet',
  },
  {
    title: i('Optional services'),
    type: 'services',
    where: 'other',
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

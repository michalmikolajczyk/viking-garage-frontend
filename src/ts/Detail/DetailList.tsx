import * as React from 'react';
import Accordion from './Accordion';

export default function DetailList(props) {
  const { offer } = props;
  return (
    <Accordion offer={offer} />
  );
}

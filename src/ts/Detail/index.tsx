import * as React from 'react';
import Container from '../Container';
import Form from './Form';
import Offer from './Offer';
import debug from 'debug';
const log = debug('app:Detail');
import * as items from './mockup';

export default function Detail(props) {
  const type = props.params.offer.split('-')[0];
  const offer = items[type];
  return (
    <Container close={true}>
      <div className="detail">
        <Offer offer={offer} />
        <Form offer={offer} />
      </div>
    </Container>
  );
}

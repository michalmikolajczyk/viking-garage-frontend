import * as React from 'react';
import Container from '../Container';
import Form from './Form';
import Offer from './Offer';
import debug from 'debug';
const log = debug('app:Detail');
import { offer } from './mockup';

export default function Detail(props) {
  return (
    <Container close={true}>
      <div className="detail">
        <Offer offer={offer} />
      </div>
    </Container>
  );
}
        // <Form offer={offer} />

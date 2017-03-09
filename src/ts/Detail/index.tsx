import * as React from 'react';
import Container from '../Container';
import DetailForm from './DetailForm';
import DetailOffer from './DetailOffer';
import debug from 'debug';
const log = debug('app:Detail');
import * as items from './mockup';

export default function Detail(props) {
  const type = props.params.offer.split('-')[0];
  const offer = items[type];
  return (
    <Container close={true}>
      <div className="detail">
        <DetailOffer offer={offer} />
        <DetailForm offer={offer} />
      </div>
    </Container>
  );
}

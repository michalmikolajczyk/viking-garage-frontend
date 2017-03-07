import * as React from 'react';
import DetailForm from './DetailForm';
import Container from '../Container';
import debug from 'debug';
const log = debug('app:Detail');
import * as items from './mockup';

export default function Detail(props) {
  const offer = items['ktm'];
  return (
    <Container close={true}>
      <div className="detail cont">
        <div className="image">
          <img src={offer.images.main} />
        </div>
        <div className="form">
          <div className="title">
            {offer.title}
          </div>
          <DetailForm />
        </div>
      </div>
    </Container>
  );
}

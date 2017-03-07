import * as React from 'react';
import DetailForm from './DetailForm';
import Container from '../Container';
import debug from 'debug';
const log = debug('app:Detail');
import * as items from './mockup';

export default function Detail(props) {
  const offer = items['ktm'];
  return (
    <Container>
      <div className="detail cont">
        <div className="image">
          <img src={offer.images.main} />
        </div>
        <div className="params">
          <div className="title">
            {offer.title}
          </div>
          <DetailForm />
          <button className="ride-btn">
            <span className="raido">
              &#5809;
            </span>
            <span>
              IDE
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
}

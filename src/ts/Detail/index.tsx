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
      <div className="cont detail">
        <div className="description">
          <div className="image">
            <img src={offer.images.main} />
          </div>
          <div className="title">
            {offer.title}
          </div>
          <div className="owner">
            <div className="picture" style={{backgroundImage: `url(${offer.owner.picture})`}} />
            <div className="owner-details">
              <div className="fullname">
                {offer.owner.fullname}
              </div>
              <div className="location">
                {`${offer.location.address.city}, ${offer.location.address.country}`}
              </div>
            </div>
            <div className="text">
              {offer.description}
            </div>
          </div>
        </div>
        <div className="form-detail">
          <div className="title">
            {offer.title}
          </div>
          <DetailForm />
        </div>
      </div>
    </Container>
  );
}

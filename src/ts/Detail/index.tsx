import * as React from 'react';
import {
  FontIcon,
  Paper,
} from 'material-ui';
import * as _ from 'lodash';
import DetailForm from './DetailForm';
import Container from '../Container';
import Comments from './Comments';
import DetailTable from './DetailTable';
import debug from 'debug';
const log = debug('app:Detail');
import * as items from './mockup';

export default function Detail(props) {
  const type = props.params.offer.split('-')[0];
  const offer = items[type];
  return (
    <Container close={true}>
      <div className="cont detail">
        <div className="description">
          <div className="image" style={{ backgroundImage: `url(${offer.images.main})` }}>
          </div>
          <div className="title">{offer.title}</div>
          <div className="owner">
            <div className="picture" style={{ backgroundImage: `url(${offer.owner.picture})` }} />
            <div className="owner-details">
              <div className="fullname">{offer.owner.fullname}</div>
              <div className="location">
                {`${offer.location.address.city}, ${offer.location.address.country}`}
              </div>
            </div>
          </div>
          <div className="text">{offer.description}</div>
          <DetailTable offer={props} />
          <Comments />
        </div>
        <div className="form-detail">
          <div className="title">{offer.title}</div>
          <DetailForm offer={offer} />
        </div>
      </div>
    </Container>
  );
}

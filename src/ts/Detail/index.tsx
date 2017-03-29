import * as React from 'react';
import { browserHistory } from 'react-router';
import Container from '../Container';
import NetworkError from '../Dialogs/NetworkError';
import FormVG from './FormVG';
import Offer from './Offer';
import * as api from './api';
import debug from 'debug';
const log = debug('app:Detail');
import * as mockup from './mockup';

export default class Detail extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const id = props.params.id;
    if (isNaN(id)) browserHistory.push('/notfound');
    this.state = {
      id,
      offer: mockup.offer,
      networkErr: false,
    };
  }

  componentDidMount() {
    api.get(this.state.id)
      .then((res) => {
        if (res['err']) throw res['msg'];
        this.setState({ offer: res });
      })
      .catch((err) => {
        log(`API get error ${err}`);
        this.setState({ networkErr: true });
      });
  }

  close = () => this.setState({ networkErr: false });

  render() {
    return (
      <Container close={true}>
        <div className="detail">
          <Offer offer={this.state.offer} />
          <FormVG offer={this.state.offer} />
        </div>
        <NetworkError
          open={this.state.networkErr}
          close={this.close}
        />
      </Container>
    );
  }
}

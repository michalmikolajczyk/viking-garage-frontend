import * as React from 'react';
import { browserHistory } from 'react-router';
import Container from '../Container';
import Raido from '../Raido';
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
    if (isNaN(id)) browserHistory.push('/notfound')
    this.state = {
      id,
      offer: null,
      loading: true,
    };
  }

  componentDidMount() {
    api.get(this.state.id)
      .then((res) => {
        if (res['err']) throw res['msg'];
        this.setState({
          loading: false,
          offer: res,
        });
      })
      .catch((err) => {
        log(`API get error ${err}`);
        this.setState({
          loading: false,
          offer: mockup.offer,
        });
      });
  }

  render() {
    const body = this.state.loading
      ? (<div className="loading"><Raido /></div>)
      : (<div className="detail">
          <Offer offer={this.state.offer} />
          <FormVG offer={this.state.offer} />
        </div>);

    return (
      <Container close={true}>
        {body}
      </Container>
    );
  }
}

import * as React from 'react';
import { browserHistory } from 'react-router';
import * as _ from 'lodash';
import NetworkError from '../Dialogs/NetworkError';
import FormVG from './FormVG';
import FormWrap from './FormWrap';
import Offer from './Offer';
import * as api from './api';

export default class Detail extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object }

  constructor(props, context) {
    super(props, context);
    const id = props.params.id;
    if (isNaN(id)) browserHistory.push('/notfound');
    this.state = {
      id,
      networkErr: false,
      offer: _.get(context, 'data.offer', {}),
    };
  }

  componentDidMount() {
    api.get(this.state.id)
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true });
        this.setState({ offer: res });
      })
      .catch(err => this.setState({ networkErr: true }));
  }


  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    return (
      <div>
        <div className="detail">
          <Offer offer={this.state.offer} />
          <FormWrap>
            <FormVG offer={this.state.offer} main={true} />
          </FormWrap>
        </div>
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

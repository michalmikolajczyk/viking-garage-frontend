import * as React from 'react';
import { browserHistory } from 'react-router';
import * as _ from 'lodash';
import { default as AppBarVG } from '../AppBar';
import NetworkError from '../Dialogs/NetworkError';
import Accordion from '../Accordion';
import HeaderVG from './HeaderVG';
import ListVG from './ListVG';
import parser from '../helpers/parser';
import FormVG from '../FormVG';
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
      offer: _.get(context, 'data.offer'),
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
    const { offer } = this.state;
    const motorcycles = _.get(offer, 'motorcycles[0]', {});
    const general = parser('general', motorcycles);

    return (
      <div>
        <AppBarVG />
        <div className="detail">
          <HeaderVG offer={offer} />
          <FormVG offer={offer} />
          <Accordion offer={general} open={true} />
          <ListVG offer={offer} />
        </div>
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </div>
    );
  }
}

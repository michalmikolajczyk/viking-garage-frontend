import * as React from 'react';
import { browserHistory } from 'react-router';
import * as _ from 'lodash';
import NetworkError from '../Dialogs/NetworkError';
import Accordion from '../Accordion';
import AppBarVG from '../AppBarVG';
import HeaderVG from './HeaderVG';
import ListVG from './ListVG';
import parser from '../helpers/parser';
import { isHourlySubtype } from '../helpers/hours';
import FormVG from '../FormVG';
import * as api from './api';

export default class Detail extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object };

  constructor(props, context) {
    super(props, context);
    const id = props.params.id;
    if (isNaN(id)) browserHistory.push('/notfound');
    this.state = {
      id,
      end: _.get(this.props, 'location.query.end', null),
      start: _.get(this.props, 'location.query.start', null),
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
    const isHourly = isHourlySubtype(offer);

    return (
      <div className="V5G5">
        <AppBarVG {...this.props} />
        <div className="detail">
          <div className="header-wrapper">
            <HeaderVG offer={offer} />
          </div>
          <FormVG
            hour={isHourly}
            offer={offer}
            end={this.state.end}
            start={this.state.start}
          />
          <div className="brief-text mobile-tablet-only">
            {_.get(offer, 'brief')}
          </div>
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

import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import FormPure from './FormPure';
import FormWrap from './FormWrap';
import Raido from '../Raido';
import RideDialog from './RideDialog';
import RideSuccess from './RideSuccess';
import NetworkError from '../Dialogs/NetworkError';
import { ride } from './api';
import i from '../i18n';

export default class FormVG extends React.Component<any, any> {
  // default values (before fetched)
  days = 3;
  price = 35;
  state = {
    startDate: moment().toDate(),
    endDate: moment().add(3, 'days').toDate(),
    equipment: 1,

    wait: false,
    rideDialog: false,
    networkErr: false,
    rideSuccess: false,
  };

  submit = (user) => {
    this.setState({ wait: true });
    ride({
      ...user,
      offer: this.props.offer.id,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      equipment: this.state.equipment,
      price: `${this.getPrice()} ${i('USD')}`,
      total: `${this.getTotal()} ${i('USD')}`,
      currency: i('USD'),
    })
      .then((res) => {
        if (res['err']) return this.setState({  wait: false, networkErr: true });
        this.setState({
          wait: false,
          rideDialog: false,
          rideSuccess: true,
        });
      })
      .catch(err => this.setState({ wait: false, networkErr: true }));
  };

  closeNetworkErr = () => this.setState({ networkErr: false })
  openRideDialog = () => this.setState({ rideDialog: true })
  closeRideDialog = () => this.setState({ rideDialog: false })
  closeRideSuccess = () => this.setState({ rideSuccess: false })

  getTitle = () => _.get(this.props.offer, 'title', '')
  getPrice = () => _.get(this.props.offer, 'price', this.price)
  getTotal = () => this.getPrice() * (Math.abs(moment(this.state.endDate).diff(moment(this.state.startDate), 'days')) + 1);
  startDateChange = (ev, startDate) => this.setState({ startDate });
  endDateChange = (ev, endDate) => this.setState({ endDate });
  equipmentChange = (ev, index, equipment) => this.setState({ equipment });

  render() {
    const formData = {
      ...this.state,
      price: this.getPrice(),
      total: this.getTotal(),
      endDateChange: this.endDateChange,
      equipmentChange: this.equipmentChange,
      startDateChange: this.startDateChange,
    }

    return (
      <FormWrap>
        <div className="title">{this.getTitle()}</div>
        <FormPure {...formData} />
        <button
          className="ride-btn"
          disabled={_.isEmpty(this.props.offer)}
          onClick={this.openRideDialog}
        >
          <Raido />
          <span>IDE</span>
        </button>
        <div>
          <RideDialog
            {...formData}
            submit={this.submit}
            wait={this.state.wait}
            open={this.state.rideDialog}
            close={this.closeRideDialog}
          />
          <RideSuccess
            open={this.state.rideSuccess}
            close={this.closeRideSuccess}
          />
          <NetworkError
            open={this.state.networkErr}
            close={this.closeNetworkErr}
          />
        </div>
      </FormWrap>
    );
  }
}

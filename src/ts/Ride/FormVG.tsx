import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import FormPure from './FormPure';
import FormWrap from './FormWrap';
import Contact from '../Contact';
import Raido from '../Raido';
import i from '../i18n';

const success = {
  title: 'Your ride is booked.',
  body: 'Our team will contact you within the next 24 hours in order to confirm it and discuss the details.\n\nGet ready for an unforgettable experience with VIKING GARAGE!',
}

export default class FormVG extends React.Component<any, any> {
  // default values (before fetched)
  state = {
    startDate: null,
    endDate: null,
    equipment: 1,

    wait: false,
    rideDialog: false,
    networkErr: false,
    rideSuccess: false,
  };

  getMessage = () => ({
    offer: this.props.offer.id,
    startDate: this.state.startDate,
    endDate: this.state.endDate,
    equipment: this.state.equipment,
    price: `${this.getPrice()} ${i('USD')}`,
    total: `${this.getTotal()} ${i('USD')}`,
    currency: i('USD'),
  });

  // submit = (user) => {
  //   this.setState({ wait: true });
  //   ride({
  //     ...user,
  //     offer: this.props.offer.id,
  //     startDate: this.state.startDate,
  //     endDate: this.state.endDate,
  //     equipment: this.state.equipment,
  //     price: `${this.getPrice()} ${i('USD')}`,
  //     total: `${this.getTotal()} ${i('USD')}`,
  //     currency: i('USD'),
  //   })
  //     .then((res) => {
  //       if (res && res['err']) return this.setState({ wait: false, networkErr: true });
  //       this.setState({
  //         wait: false,
  //         rideDialog: false,
  //         rideSuccess: true,
  //       });
  //     })
  //     .catch(err => this.setState({ wait: false, networkErr: true }));
  // };

  closeNetworkErr = () => this.setState({ networkErr: false })
  openRideDialog = () => this.setState({ rideDialog: true })
  closeRideDialog = () => this.setState({ rideDialog: false })
  closeRideSuccess = () => this.setState({ rideSuccess: false })

  getTitle = () => _.get(this.props.offer, 'title', '')
  getPrice = () => _.get(this.props.offer, 'price', 0)
  getRange = () => (this.state.startDate && this.state.endDate) ? (Math.abs(moment(this.state.endDate).diff(moment(this.state.startDate), 'days')) + 1) : 0;
  getTotal = () => this.getPrice() * this.getRange();
  startDateChange = (ev, startDate) => this.setState({ startDate });
  endDateChange = (ev, endDate) => this.setState({ endDate });
  equipmentChange = (ev, index, equipment) => this.setState({ equipment });

  render() {
    const title = this.getTitle();
    const price = this.getPrice();
    const total = this.getTotal();

    const formData = {
      ...this.state,
      price,
      total,
      endDateChange: this.endDateChange,
      equipmentChange: this.equipmentChange,
      startDateChange: this.startDateChange,
    }

    const rideButton = (
      <div className="ride-btn">
        <Raido />
        <span>IDE</span>
      </div>
    );

    return (
      <FormWrap>
        <div className="title">{title}</div>
        <FormPure {...formData} />
        <div>
          <Contact
            success={success}
            button={rideButton}
            message={this.getMessage}
          >
            <div className="title">
              {title}
            </div>
            <FormPure {...formData} />
            <div className="text">
              {i('If you are interested in that ride, leave us your details - our team will contact you:')}
            </div>
          </Contact>
        </div>
      </FormWrap>
    );
  }
}

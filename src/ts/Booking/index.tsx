import * as React from 'react';
import * as _ from 'lodash';
import {
  Dialog,
  FlatButton,
  RaisedButton,
} from 'material-ui';
import Reaction from './Reaction';
import BookingForm from './BookingForm';
import NetworkError from '../Dialogs/NetworkError';
import Raido from '../Raido';
import i18n from '../i18n';
import { booking } from './api';
import Payment from '../Payment';

const i = i18n;

interface props {
  form: any;
  offerTitle: string;
  type: string;
  title?: string;
  button: any;
  message?: Function;
}

export default class Booking extends React.Component<props, any> {
  formsy: any;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      wait: false,
      canSubmit: false,
      openDialog: false,
      networkErr: false,
      paymentDetails: null,
      stripeTrigger: false,
    };
  }

  submit = (data) => {
    const body = this.props.message && this.props.message();
    this.setState({ wait: true });
    return booking({ ...data, body, type: this.props.type, code: i() })
      .then((res) => {
        if (res && res['err']) return this.setState({ networkErr: true, wait: false });
        this.setState({ wait: false, open: false, openDialog: true });
        this.initStripe(data);
        
      })
      .catch(err => this.setState({ networkErr: true, wait: false }));
    }

  initStripe = (data) => {
    console.log('init Stripe');
    return this.setState({ paymentDetails: data, stripeTrigger: true });
  }

  terminateStripe = () => {
    console.log('terminate Stripe');
    return this.setState({ paymentDetails: null, stripeTrigger: false });
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  onValid = () => this.setState({ canSubmit: true });
  onInvalid = () => this.setState({ canSubmit: false });
  closeOpenDialog = () => this.setState({ openDialog: false });
  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    const {
      button,
      children,
      form,
      offerTitle,
      title,
    } = this.props;

    const success = {
      title: i('Your ride is booked.'),
      body: i('Our team will contact you within the next 24 hours in order to confirm it and discuss the details.\n\nGet ready for an unforgettable experience with VIKING GARAGE!'),
    };

    const actions = [
      <FlatButton
        label={i('Cancel')}
        primary={true}
        onTouchTap={this.close}
        disabled={this.state.wait}
      />,
      <RaisedButton
        label={i('Submit')}
        primary={true}
        keyboardFocused={true}
        disabled={!this.state.canSubmit || this.state.wait}
        onTouchTap={() => this.formsy.submit()}
      />,
    ];

    return (
      <div>
        <div className="inputs">
          <button
            onClick={this.open}
            className="contact-submit">
            {this.props.button}
          </button>
        </div>
        <Dialog
          modal={false}
          actions={actions}
          open={this.state.open}
          title={title || <div className="dialog-raido"><Raido /></div>}
          repositionOnUpdate={false}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={false}
          className="dialog-root"
          contentClassName="dialog-content"
          bodyClassName="dialog-body"
        >
          <div className="dialog-scroll">
            <div className="contact-body ">
              <div className="title">
                {offerTitle}
              </div>
              <div className="text">
                {i('Please check the details for the ride')}
              </div>
              {form}
              <div className="text">
                {i('Fill in your details to book the ride')}
              </div>
              <BookingForm
                ref={f => this.formsy = f}
                submit={this.submit}
                onValid={this.onValid}
                onInvalid={this.onInvalid}
              />
              <Payment 
                stripeTrigger={this.state.stripeTrigger}
                paymentDetails={this.state.paymentDetails}
                processStripe={this.terminateStripe}
              />
              <div className="text">
                {i('If anything is unclear, you can reach us via telephone or WhatsApp at')}
                <br />
                <a href="tel:+48697951264" target="_blank">
                  {i('phone number:')} +48 697 951 264
                </a>
              </div>
            </div>
          </div>
        </Dialog>
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
        <Reaction
          data={success}
          open={this.state.openDialog}
          close={this.closeOpenDialog}
        />
      </div>
    );
  }
}

import * as React from 'react';
import CreditCardForm from './CreditCardForm';
import PaymentRequestForm from './PaymentRequestForm';
import { injectStripe } from 'react-stripe-elements';
import * as api from './api';

class Payment extends React.Component<any, any> {
  componentDidUpdate(prevProps) {
    if (this.props.stripeTrigger &&
    this.props.paymentDetails &&
    prevProps.stripeTrigger !== this.props.stripeTrigger) {
      const { id, name, body } = this.props.paymentDetails;
      const [amountString, currency] = body.split('Total: ')[1].split(',')[0].split(' ');
      const amount = parseFloat(amountString);
      this.props.stripe.createToken({ name })
        .then(res => api.payment({ token: res, bookingId: id, amount, currency }))
        .then(res => this.props.terminateStripe(null, res))
        .catch(err => console.log(err) && this.props.terminateStripe(err));
    }
  }
  render() {
    const { paymentDetails, paymentCallback } = this.props;
    return (
      <div className="payment-stripe-wrapper">
        <CreditCardForm />
        <PaymentRequestForm />
      </div>
    );
  }
}

export default injectStripe(Payment);

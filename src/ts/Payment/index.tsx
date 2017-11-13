import * as React from 'react';
import CreditCardForm from './CreditCardForm';
import PaymentRequestForm from './PaymentRequestForm';
import { injectStripe } from 'react-stripe-elements';

class Payment extends React.Component<any, any> {
  componentDidUpdate(prevProps) {
    if (this.props.paymentDetails &&
    prevProps.stripeTrigger !== this.props.stripeTrigger) {
      console.log(this.props.paymentDetails);
      this.props.stripe.createToken({ type: 'card', name: 'Jenny Rosen' })
        .then(res => this.props.processStripe(res));
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

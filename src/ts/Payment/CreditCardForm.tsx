import * as React from 'react';
// import * as _ from 'lodash';
import { 
  CardElement, 
  injectStripe
} from 'react-stripe-elements';
import PaymentRequestForm from './PaymentRequestForm';

class Payment extends React.Component<any, any> {
  render() {
    return (
      <label>
        Card details
        <CardElement style={{base: {fontSize: '18px'}}} />
      </label>
    );
  }
};

export default injectStripe(Payment);

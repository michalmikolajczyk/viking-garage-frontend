import * as React from 'react';
// import * as _ from 'lodash';
import { CardElement, injectStripe } from 'react-stripe-elements';

class Payment extends React.Component {
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

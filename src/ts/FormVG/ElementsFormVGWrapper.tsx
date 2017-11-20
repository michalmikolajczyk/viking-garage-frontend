import * as React from 'react';
import { Elements } from 'react-stripe-elements-universal';
import FormVG from '../FormVG';

export default class extends React.Component<any, any> {
  render() {
    const { ...passedThroughProps } = this.props;
    return (
      <Elements>
        <FormVG {...passedThroughProps} />
      </Elements>
    )
  }
}

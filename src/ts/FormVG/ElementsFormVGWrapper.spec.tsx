import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import ElementsFormVGWrapper from './ElementsFormVGWrapper';
require('../helpers/stripe-mock');
import { StripeProvider } from 'react-stripe-elements';
import { mountWithTheme } from '../helpers/test-theme';

function stripeContained(WrappedComponent) {
  return class extends React.Component<any, any> {
    render() {
      const { ...passThroughProps } = this.props;
      return (
        <StripeProvider apiKey="pk_test_12345">
          <WrappedComponent {...passThroughProps} />
        </StripeProvider>
      )
    }
  }
}
  
const StripeEFVGW = stripeContained(ElementsFormVGWrapper)

describe('<ElementsFormVGWrapper />', () => {
  it('should render child components', () => {
    const wrapper = mountWithTheme(<StripeEFVGW />)
    expect(wrapper.find('Elements')).to.have.length(1);
    expect(wrapper.find('FormVG')).to.have.length(1);
  });
});

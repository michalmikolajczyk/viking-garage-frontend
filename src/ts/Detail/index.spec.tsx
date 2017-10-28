import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { default as Detail } from './index';
require('../helpers/stripe-mock');
import { StripeProvider } from 'react-stripe-elements';

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

const StripeDetail = stripeContained(Detail)

describe('<Detail />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<StripeDetail params={{ id: 1 }} />);
    expect(wrapper.find('Detail').dive().find('HeaderVG')).to.have.length(1);
    expect(wrapper.find('Detail').dive().find('Elements')).to.have.length(1);
    // expect(wrapper.find('Detail').dive().find('Elements').dive().find('FormVG')).to.have.length(1);
    expect(wrapper.find('Detail').dive().find('Accordion')).to.have.length(1);
    expect(wrapper.find('Detail').dive().find('ListVG')).to.have.length(1);
    expect(wrapper.find('Detail').dive().find('NetworkError')).to.have.length(1);
  });
});

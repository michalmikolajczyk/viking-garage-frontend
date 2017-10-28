import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { mount, shallow } from 'enzyme';
import * as sinon from 'sinon';
require('sinon-stub-promise')(sinon);
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { formsyContext } from '../helpers/test-theme';
import * as moment from 'moment';
import * as _ from 'lodash';
import {
  countTotal,
  renderUnit,
} from '../helpers/hours';
require('../helpers/stripe-mock');
import { StripeProvider } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import FormVG from './';
import { offer } from '../Detail/mockup';

function stripeContained(WrappedComponent) {
  return class extends React.Component<any, any> {
    render() {
      const { ...passThroughProps } = this.props;
      return (
        <StripeProvider apiKey="pk_test_12345">
          <Elements>
            <WrappedComponent {...passThroughProps} />
          </Elements>
        </StripeProvider>
      )
    }
  }
}

const StripeFormVG = stripeContained(FormVG)

describe('<FormVG />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = mount(<StripeFormVG offer={offer} />, formsyContext());
    instance = wrapper.instance();
  });

  it('should display proper components for daily renting', () => {
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormDay')).to.have.length(1);
    expect(wrapper.find('Contact')).to.have.length(1);
  });

  it('should display proper components for hourly renting', () => {
    wrapper = mount(<StripeFormVG offer={offer} hour={true} />, formsyContext());
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormHour')).to.have.length(1);
    expect(wrapper.find('Contact')).to.have.length(1);
  });

  it('should displays title and price properly', () => {
    wrapper = shallow(<FormVG offer={offer} />)
    instance = wrapper.instance();
    expect(instance.getTitle(instance.props.offer)).to.be.equal(offer.title);
    expect(instance.getPrice(instance.props.offer)).to.be.equal(renderUnit(instance.props.offer));
  });

  it('should calculates total price for daily renting', () => {
    wrapper = shallow(<FormVG offer={offer} />)
    instance = wrapper.instance();
    const days = [0, 7, -5];
    const price = 55;
    const start = moment().toDate();
    instance['startDateChange'](undefined, start);
    _.forEach(days, (day) => {
      const end = day > 0 ? moment().add(day, 'days').toDate() : moment().subtract(day, 'days').toDate();
      instance['endDateChange'](undefined, end);
      expect(instance.getTotal(instance.props.offer)).to.be.equal(countTotal(instance.props.offer, Math.abs(day) + 1));
    });
  });

  it('should sets start hour properly', () => {
    wrapper = mount(<FormVG offer={offer} hour={true} />, formsyContext());
    instance = wrapper.instance();
    expect(instance.state.startHour).to.be.undefined;
    const start = { val: 23, ind: 22 };
    instance.startHourChange(undefined, start);
    expect(instance.state.startHour).to.be.equal(start);
    expect(instance.getMessage()).to.contain(`${start.val}:00`);
  })

  it('should calculates total price for hourly renting', () => {
    wrapper = mount(<FormVG offer={offer} hour={true} />, formsyContext());
    instance = wrapper.instance();
    const hours = [1, 2, 3, 5, 8];
    const intervals = hours.map((val, ind) => ({ val, ind }));
    const price = 55;
    _.forEach(intervals, (interval) => {
      instance['intervalChange'](undefined, interval);
      expect(instance.getTotal(instance.props.offer)).to.be.equal(countTotal(instance.props.offer, interval.val));
    });
  });
});

import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
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

import FormVG from './';
import { offer } from '../Detail/mockup';

describe('<FormVG />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<FormVG offer={offer} />, formsyContext());
    instance = wrapper.instance();
  });

  it('check for form inner components in day form', () => {
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormDay')).to.have.length(1);
    expect(wrapper.find('Contact')).to.have.length(1);
  });

  it('check for form inner components in hour form', () => {
    wrapper = shallow(<FormVG offer={offer} hour={true} />, formsyContext());
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormHour')).to.have.length(1);
    expect(wrapper.find('Contact')).to.have.length(1);
  });

  it('check if displaying title & price works properly', () => {
    expect(instance.getTitle(instance.props.offer)).to.be.equal(offer.title);
    expect(instance.getPrice(instance.props.offer)).to.be.equal(renderUnit(instance.props.offer));
  });

  it('check if total calculation for day form works fine', () => {
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

  it('check if total calculation for hour form works fine', () => {
    wrapper = shallow(<FormVG offer={offer} hour={true} />, formsyContext());
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

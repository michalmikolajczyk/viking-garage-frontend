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

import FormVG from './';
import { offer } from '../Detail/mockup';

describe('<FormVG />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<FormVG offer={offer} />, formsyContext());
    instance = wrapper.instance();
  });

  it('check for form inner components', () => {
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormPure')).to.have.length(2);
    expect(wrapper.find('Contact')).to.have.length(1);
  });

  it('check if simple methods works fine', () => {
    expect(instance.getTitle()).to.be.equal(offer.title);
    expect(instance.getPrice()).to.be.equal(offer.price);
  });

  it('check if total calculation works fine', () => {
    const days = [0, 7, -5];
    const price = 55;
    const start = moment().toDate();
    instance['startDateChange'](undefined, start);
    _.forEach(days, (day) => {
      const end = day > 0 ? moment().add(day, 'days').toDate() : moment().subtract(day, 'days').toDate();
      instance['endDateChange'](undefined, end);
      expect(instance.getTotal()).to.be.equal(((Math.abs(day) + 1) * price));
    });
  });
});

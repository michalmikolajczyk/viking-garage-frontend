import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import * as _ from 'lodash';
import * as moment from 'moment';
import Form from './Form';
import { mountWithTheme } from '../helpers/test-theme';
import * as offers from './mockup';
const offer = offers.ktm;

describe('<Form />', () => {
  it('check for form inputs: price, start & end date, equipment', () => {
    const wrapper = mountWithTheme(<Form offer={offer} />);
    expect(wrapper.find('#base-price')).to.have.length(1);
    expect(wrapper.find('.date-picker')).to.have.length(2);
    expect(wrapper.find('.equipment')).to.have.length(1);
  });

  it('check for summary & submit button', () => {
    const wrapper = mountWithTheme(<Form offer={offer} />);
    expect(wrapper.find('.price')).to.have.length(1);
    expect(wrapper.find('.price').text()).to.contain('TOTAL');
    expect(wrapper.find('.ride-btn')).to.have.length(1);
  });

  it('check if summary calculation works fine', () => {
    const days = [0, 7, -5];
    const price = 55;
    const start = moment().toDate();
    const wrapper = mountWithTheme(<Form offer={offer} />);
    wrapper.instance()['startDateChange'](undefined, start);
    _.forEach(days, (day) => {
      const end = day > 0 ? moment().add(day, 'days').toDate() : moment().subtract(day, 'days').toDate();
      wrapper.instance()['endDateChange'](undefined, end);
      expect(wrapper.find('.price').text()).to.contains((Math.abs(day) * price).toString());
    });
  });
});

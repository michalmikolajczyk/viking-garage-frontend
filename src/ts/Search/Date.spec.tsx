import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import * as moment from 'moment';
import DateVG from './Date';

describe('Search <Date />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<DateVG />);
    expect(wrapper.find('.date-wrap')).to.have.length(1);
    expect(wrapper.find('.filter')).to.have.length(2);
    expect(wrapper.find('.input')).to.have.length(2);
    expect(wrapper.find('DatePicker')).to.have.length(2);
  });

  it('check if choosing the start date works properly', () => {
    const startDate = moment().toDate();
    const filter = sinon.spy((params) => {
      const {
        start,
        end,
      } = params;
      expect(start).to.be.equal(startDate);
    });
    const wrapper = shallow(<DateVG filter={filter} />);
    const instance = wrapper.instance();
    instance['onChangeStart'](undefined, startDate);
  });

  it('check if choosing the end date works properly', () => {
    const endDate = moment().toDate();
    const filter = sinon.spy((params) => {
      const {
        start,
        end,
      } = params;
      expect(end).to.be.equal(endDate);
    });
    const wrapper = shallow(<DateVG filter={filter} />);
    const instance = wrapper.instance();
    instance['onChangeEnd'](undefined, endDate);
  });

  it('check if dates before today are disabled', () => {
    const wrongDate = moment().add(-5, 'days').toDate();
    const okDate = moment().add(5, 'days').toDate();
    const wrapper = shallow(<DateVG filter={() => {}} />);
    const instance = wrapper.instance();
    expect(instance['shouldDisableDateStart'](wrongDate)).to.be.true;
    expect(instance['shouldDisableDateEnd'](wrongDate)).to.be.true;
    expect(instance['shouldDisableDateStart'](okDate)).to.be.false;
    expect(instance['shouldDisableDateEnd'](okDate)).to.be.false;
  });

  it('check if dates after picked end date are disabled', () => {
    const wrongStartDate = moment().add(10, 'days').toDate();
    const okStartDate = moment().add(1, 'days').toDate();
    const endDate = moment().add(5, 'days').toDate();
    const wrapper = shallow(<DateVG filter={() => {}} />);
    const instance = wrapper.instance();
    instance['onChangeEnd'](undefined, endDate);
    expect(instance['shouldDisableDateStart'](wrongStartDate)).to.be.true;
    expect(instance['shouldDisableDateStart'](okStartDate)).to.be.false;
  });

  it('check if dates before picked start date are disabled', () => {
    const startDate = moment().add(10, 'days').toDate();
    const wrongEndDate = moment().add(5, 'days').toDate();
    const okEndDate = moment().add(15, 'days').toDate();
    const wrapper = shallow(<DateVG filter={() => {}} />);
    const instance = wrapper.instance();
    instance['onChangeStart'](undefined, startDate);
    expect(instance['shouldDisableDateEnd'](wrongEndDate)).to.be.true;
    expect(instance['shouldDisableDateEnd'](okEndDate)).to.be.false;
  });

  it('check if dates between picked start and end date are active', () => {
    const startDate = moment().add(5, 'days').toDate();
    const endDate = moment().add(10, 'days').toDate();
    const okMiddle =  moment().add(7, 'days').toDate();
    const before = moment().add(3, 'days').toDate();
    const after = moment().add(13, 'days').toDate();
    const wrapper = shallow(<DateVG filter={() => {}} />);
    const instance = wrapper.instance();
    instance['onChangeStart'](undefined, startDate);
    instance['onChangeEnd'](undefined, endDate);
    expect(instance['shouldDisableDateEnd'](okMiddle)).to.be.false;
    expect(instance['shouldDisableDateStart'](okMiddle)).to.be.false;
    expect(instance['shouldDisableDateEnd'](before)).to.be.true;
    expect(instance['shouldDisableDateStart'](before)).to.be.false;
    expect(instance['shouldDisableDateEnd'](after)).to.be.false;
    expect(instance['shouldDisableDateStart'](after)).to.be.true;
  });
});

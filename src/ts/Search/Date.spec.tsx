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
    expect(wrapper.find('.date')).to.have.length(2);
    expect(wrapper.find('.filter')).to.have.length(2);
    expect(wrapper.find('DatePicker')).to.have.length(2);
  });

  it('check if sets actual date on create (to the minute accuracy)', () => {
    const start = moment().toDate().toString()
    const end = moment().add(14, 'days').toDate().toString();
    const wrapper = shallow(<DateVG />);
    expect(wrapper.state().startDate.toString()).to.be.equal(start);
    expect(wrapper.state().endDate.toString()).to.be.equal(end);
  });

  it('check if updates filter on change start date', () => {
    const start = moment().toDate();
    const filter = sinon.spy((params) => {
      const {
        startDate,
        endDate,
      } = params;
      expect(startDate).to.be.equal(start);
    });
    const wrapper = shallow(<DateVG filter={filter} />);
    const instance = wrapper.instance();
    instance['onChangeStart'](undefined, start);
  });

  it('check if update filter on change end date', () => {
    const end = moment().toDate();
    const filter = sinon.spy((params) => {
      const {
        startDate,
        endDate,
      } = params;
      expect(endDate).to.be.equal(end);
    });
    const wrapper = shallow(<DateVG filter={filter} />);
    const instance = wrapper.instance();
    instance['onChangeEnd'](undefined, end);
  });
});

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

  it('check if updates filter on change start date', () => {
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

  it('check if update filter on change end date', () => {
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
});

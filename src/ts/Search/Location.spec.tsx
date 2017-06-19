import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import Location from './Location';

describe('Search: <Location />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Location filter={() => {}} />)
    expect(wrapper.find('.input')).to.have.length(1);
    expect(wrapper.find('FontIcon')).to.have.length(1);
    expect(wrapper.find('AutoComplete')).to.have.length(1);
  });

  it('check if update filter on new request', () => {
    const request = 'Wroclaw';
    const filter = sinon.spy((params) => {
      expect(params).to.be.equal(request);
    });
    const wrapper = shallow(<Location filter={filter} />);
    const instance = wrapper.instance();
    instance['onNewRequest'](request);
  });
});

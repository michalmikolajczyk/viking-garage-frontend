import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import * as api from './api';
import Confirm from './Confirm';

const userEmail = 'viking.garage.app@gmail.com';

describe('Signin: <Confirm />', () => {
  let wrapper;
  let instance; 
  beforeEach(() => {
    wrapper = shallow(<Confirm params={{ email: userEmail }} />);
    instance = wrapper.instance();
  });

  it('check for inner components', () => {
    expect(wrapper.find('.form')).to.have.length(1);
    expect(wrapper.find('a[href="mailto:support@vikinggarage.com"]')).to.have.length(1);
  });

  it('check if resend link works properly', () => {
    const stub = sinon.stub(api, 'resend', ({ email }) => {
      expect(email).to.be.equal(userEmail);
      return Promise.resolve('ok');
    });
    wrapper.find('.title-btn').first().simulate('click');
    stub.restore();
  });

  it('check if resend link catches network error', () => {
    const stub = sinon.stub(api, 'resend', ({ email }) => {
      expect(email).to.be.equal(userEmail);
      return Promise.reject('network error');
    });
    wrapper.find('.title-btn').first().simulate('click');
    stub.restore();
  });
});

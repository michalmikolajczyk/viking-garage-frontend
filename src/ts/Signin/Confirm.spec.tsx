import 'mocha';
import * as React from 'react';
import * as router from 'react-router';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
require('sinon-stub-promise')(sinon);
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
    expect(wrapper.find('ConfirmSuccess')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
  });

  it('check if resend link works properly', () => {
    const stub = sinon.stub(api, 'resend', ({ email }) => {
      expect(email).to.be.equal(userEmail);
      return Promise.resolve('ok');
    });
    wrapper.find('.title-btn').first().simulate('click');
    stub.restore();
  });

  it('check if closing success dialog redirects to main page', () => {
    const resend = sinon.stub(api, 'resend')['returnsPromise']();
    const push = sinon.stub(router.browserHistory, 'push', () => {});
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(push).to.not.have.been.called;

    instance['closeConfirmDialog']();
    resend.resolves('ok');

    expect(instance.setState).to.have.been.calledOnce;
    expect(push).to.have.been.calledOnce;
    expect(push).to.have.been.calledWith('/');

    push.restore();
    resend['restore']();
  });

  it('check if submit action handles backend error', () => {
    const stub = sinon.stub(api, 'resend')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    stub.resolves({ err: 'wrong e-mail address' });

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.true;

    stub['restore']();
  });

  it('check if submit action shows unexpected network error', () => {
    const stub = sinon.stub(api, 'resend')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    stub.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.true;

    stub['restore']();
  });
});

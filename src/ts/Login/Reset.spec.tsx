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
import * as router from 'react-router';
import * as api from './api';
import Reset from './Reset';

const email = {
  email: 'viking.garage.app@gmail.com',
}

describe('Login: <Reset />', () => {
  let wrapper;
  let instance;
  let push;
  beforeEach(() => {
    wrapper = shallow(<Reset />, formsyContext());
    instance = wrapper.instance();
    push = sinon.stub(router.browserHistory, 'push', () => {});
  });

  afterEach(() => {
    push.restore();
  });

  it('check for inner components', () => {
    expect(wrapper.find('FormsyText')).to.have.length(1);
    expect(wrapper.find('[name="email"]')).to.have.length(1);
    expect(wrapper.find('button.submit')).to.have.length(1);
    expect(wrapper.find('ResetError')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
  });

  it('check if submit action get user info properly', () => {
    const stub = sinon.stub(api, 'reset', (params) => {
      expect(params).to.be.deep.equal(email)
      return Promise.resolve('ok');
    });
    instance['submit'](email);
    stub.restore();
  });

  it('check if submit action works properly', () => {
    const reset = sinon.stub(api, 'reset')['returnsPromise']();

    instance['submit']();
    reset.resolves('ok');

    expect(push).to.have.been.calledOnce;
    expect(push).to.have.been.calledWith('/check');

    reset['restore']();
  });

  it('check if submit action shows wrong e-mail address dialog', () => {
    const stub = sinon.stub(api, 'reset')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.openDialog).to.be.false;

    instance['submit']();
    stub.resolves({ err: 'wrong e-mail address' });

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.openDialog).to.be.true;

    stub['restore']();
  });

  it('check if submit action shows unexpected network error', () => {
    const stub = sinon.stub(api, 'reset')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    stub.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.networkErr).to.be.true;

    stub['restore']();
  });
});

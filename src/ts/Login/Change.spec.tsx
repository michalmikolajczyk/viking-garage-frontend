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
import * as api from './api';
import Change from './Change';

const paramToken = 'uuid-token';
const userPassword = 'secret';

describe('Login: <Change />', () => {
  let wrapper;
  let instance; 
  beforeEach(() => {
    wrapper = shallow(<Change params={{ token: paramToken }} />, formsyContext());
    instance = wrapper.instance();
  });

  it('check for inner components', () => {
    expect(wrapper.find('.form')).to.have.length(1);
    expect(wrapper.find('FormsyText')).to.have.length(2);
    expect(wrapper.find('[name="password1"]')).to.have.length(1);
    expect(wrapper.find('[name="password2"]')).to.have.length(1);
    expect(wrapper.find('button.submit')).to.have.length(1);
  });

  it('check if submit action get user info properly', () => {
    const stub = sinon.stub(api, 'change', ({ token, password1, password2 }) => {
      expect(token).to.be.equal(paramToken);
      expect(password1).to.be.equal(userPassword);
      expect(password2).to.be.equal(userPassword);
      return Promise.resolve('ok');
    });
    instance['submit']({
      password1: userPassword,
      password2: userPassword,
    });
    sinon.restore(api.change);
  });

  it('check if submit action works properly', () => {
    const stub = sinon.stub(api, 'change')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;

    instance['submit']();
    stub.resolves('ok');

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.changeSuccess).to.be.true;
    expect(instance.state.changeError).to.be.false;
    expect(instance.state.networkErr).to.be.false;
    sinon.restore(api.change);
  });

  it('check if submit action show backend error', () => {
    const stub = sinon.stub(api, 'change')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;

    instance['submit']();
    stub.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.changeSuccess).to.be.false;
    expect(instance.state.changeError).to.be.true;
    expect(instance.state.networkErr).to.be.false;
    sinon.restore(api.change);
  });

  it('check if submit action show unexpected network error', () => {
    const stub = sinon.stub(api, 'change')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;

    instance['submit']();
    stub.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.changeSuccess).to.be.false;
    expect(instance.state.changeError).to.be.false;
    expect(instance.state.networkErr).to.be.true;
  });
});

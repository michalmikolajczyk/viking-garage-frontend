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
import { browserHistory } from 'react-router';
import * as api from './api';
import SigninForm from './SigninForm';

const user = {
  name: 'Viking Garage',
  email: 'viking.garage.app@gmail.com',
  password1: 'secret',
  password2: 'secret',
  birthday: new Date(),
  agree: true,
}

const response = {
  user,
  token: 'uuid-token',
}

describe('Signin: <SigninForm />', () => {
  let wrapper;
  let instance;
  let push;
  beforeEach(() => {
    wrapper = shallow(<SigninForm />, formsyContext());
    instance = wrapper.instance();    
    push = sinon.stub(browserHistory, 'push', () => {});
  });

  afterEach(() => {
    push.restore();
  });

  it('check for inner components', () => {
    expect(wrapper.find('FormsyText')).to.have.length(4);
    expect(wrapper.find('[name="name"]')).to.have.length(1);
    expect(wrapper.find('[name="email"]')).to.have.length(1);
    expect(wrapper.find('[name="password1"]')).to.have.length(1);
    expect(wrapper.find('[name="password2"]')).to.have.length(1);

    expect(wrapper.find('FormsyDate')).to.have.length(1);
    expect(wrapper.find('[name="birthday"]')).to.have.length(1);

    expect(wrapper.find('FormsyCheckbox')).to.have.length(1);
    expect(wrapper.find('[name="agree"]')).to.have.length(1);
   
    expect(wrapper.find('button.submit')).to.have.length(1);
  });

  it('check if submit action gets user info properly', () => {
    const signin = sinon.stub(api, 'signin', (params) => {
      expect(params).to.be.deep.equal(user)
      return Promise.resolve('ok');
    });
    instance['submit'](user);
    signin.restore();
  });

  it('check if submit action works properly', () => {
    const signin = sinon.stub(api, 'signin')['returnsPromise']();

    instance['submit'](user);
    signin.resolves(response);

    expect(push).to.have.been.calledOnce;
    expect(push).to.have.been.calledWith(`/confirm/${user.email}`);

    signin['restore']();
  });

  it('check if submit action shows backend error', () => {
    const signin = sinon.stub(api, 'signin')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    signin.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.openDialog).to.be.true;
    expect(instance.state.networkErr).to.be.false;
    signin['restore']();
  });

  it('check if submit action shows unexpected network error', () => {
    const signin = sinon.stub(api, 'signin')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    signin.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.true;
    signin['restore']();
  });
});

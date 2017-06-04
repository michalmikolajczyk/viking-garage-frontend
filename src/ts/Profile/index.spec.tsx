import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
require('sinon-stub-promise')(sinon);
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import {
  formsyContext,
  mountWithTheme,
} from '../helpers/test-theme';
import * as api from './api';
import { default as Profile } from './';

const date = new Date()

const user = {
  firstname: 'Viking',
  lastname: 'Garage',
  birthday: date,
  email: 'viking.garage.app@gmail.com',
};

const res = {
  data: {
    firstname: 'Viking',
    lastname: 'Garage',
    birthday: date,
    email: 'viking.garage.app@gmail.com',
  },
};

describe('Profile', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<Profile />, formsyContext());
    instance = wrapper.instance();
  });

  it('check for inner components', () => {
    expect(wrapper.find('UserMenu')).to.have.length(1);

    expect(wrapper.find('UserSide')).to.have.length(1);
    expect(wrapper.find('UserPhoto')).to.have.length(1);

    expect(wrapper.find('UserRequired')).to.have.length(1);
    expect(wrapper.find('UserOptional')).to.have.length(1);
    expect(wrapper.find('button.submit')).to.have.length(1);

    expect(wrapper.find('SaveError')).to.have.length(1);
    expect(wrapper.find('SaveSuccess')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
  });

  it('check if gets user info run on componentDidMount', () => {
    sinon.spy(Profile.prototype, 'componentDidMount');
    const get = sinon.stub(api, 'get', () => Promise.resolve());
    expect(get).to.not.be.called;

    const wrapper = mountWithTheme(<Profile />);

    expect(Profile.prototype.componentDidMount).to.be.calledOnce;
    expect(get).to.be.calledOnce;
    get.restore();
  });

  it('check if loads user info properly', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.user).to.be.null;
    expect(instance.state.networkErr).to.be.false;

    instance['componentDidMount']();
    get.resolves(res);

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.user).to.be.deep.equal(user);

    get['restore']();
  });

  it('check if handles backend error properly', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.user).to.be.null;
    expect(instance.state.networkErr).to.be.false;

    instance['componentDidMount']();
    get.resolves({ err: 'something went wrong' });

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.true;
    expect(instance.state.user).to.be.null;

    get['restore']();
  });

  it('check if handles unexpected network error', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.user).to.be.null;
    expect(instance.state.networkErr).to.be.false;

    instance['componentDidMount']();
    get.rejects('unexpected error');

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.true;
    expect(instance.state.user).to.be.null;

    get['restore']();
  });

  it('check if updates user info properly', () => {
    const put = sinon.stub(api, 'put', (data) => {
      expect(data).to.be.deep.equal(user);
      return Promise.resolve();
    });
    instance['submit'](user);
    put.restore();
  });

  it('check if saves user info properly', () => {
    const put = sinon.stub(api, 'put')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.saveError).to.be.false;
    expect(instance.state.saveSuccess).to.be.false;

    instance['submit'](user);
    put.resolves();

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.saveError).to.be.false;
    expect(instance.state.saveSuccess).to.be.true;

    put['restore']();
  });

  it('check if handles backend error properly', () => {
    const put = sinon.stub(api, 'put')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.saveError).to.be.false;
    expect(instance.state.saveSuccess).to.be.false;

    instance['submit'](user);
    put.resolves({ err: 'something went wrong' });

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.saveError).to.be.true;
    expect(instance.state.saveSuccess).to.be.false;

    put['restore']();
  });

  it('check if handles unexpected network error', () => {
    const put = sinon.stub(api, 'put')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.saveError).to.be.false;
    expect(instance.state.saveSuccess).to.be.false;

    instance['submit'](user);
    put.rejects('unexpected network error');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.networkErr).to.be.true;
    expect(instance.state.saveError).to.be.false;
    expect(instance.state.saveSuccess).to.be.false;

    put['restore']();
  });
});

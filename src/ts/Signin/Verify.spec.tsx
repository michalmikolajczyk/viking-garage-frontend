import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
require('sinon-stub-promise')(sinon);
import { mountWithTheme } from '../helpers/test-theme';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import * as api from './api';
import * as offersApi from '../Offers/api';
import Verify from './Verify';

const userToken = { token: 'uuid-token' };
const response = {
  token: 'jwt-token',
  user: {
    email: 'viking.garage.app@gmail.com',
  }
}

describe('Signin: <Verify />', () => {
  let wrapper;
  let instance;
  let get;

  before(() => {
    get = sinon.stub(offersApi, 'get', () => Promise.resolve())
  });

  beforeEach(() => {
    wrapper = shallow(<Verify params={userToken} />);
    instance = wrapper.instance();
  });

  after(() => {
    get.restore();
  })

  it('check for inner components', () => {
    expect(wrapper.find('VerifyError')).to.have.length(1);
    expect(wrapper.find('VerifySuccess')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
  });

  it('check if verification run on componentDidMount', (done) => {
    sinon.spy(Verify.prototype, 'componentDidMount');

    const verify = sinon.stub(api, 'verify', (token) => {
      expect(token).to.be.deep.equal(userToken)
      return Promise.resolve('ok');
    });

    const wrapper = mountWithTheme(<Verify params={userToken} />);
    expect(verify).to.be.calledOnce;
    expect(Verify.prototype.componentDidMount).to.be.calledOnce;
    verify.restore();
    // sometimes it takes very long (> 2 sec) to render all components with mount
    done();
  });

  it('check if verification action works properly', () => {
    const verify = sinon.stub(api, 'verify')['returnsPromise']();
    const storage = sinon.stub(localStorage, 'setItem');
    instance.setState = sinon.spy(instance.setState)

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.verifyError).to.be.false;
    expect(instance.state.verifySuccess).to.be.false;

    instance['verifyAccount']();
    verify.resolves(response);

    expect(storage).to.have.been.calledTwice;
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.verifyError).to.be.false;
    expect(instance.state.verifySuccess).to.be.true;

    verify['restore']();
    storage.restore();
  });

  it('check if response with JWT and user is saved in localStorage', () => {
    const verify = sinon.stub(api, 'verify')['returnsPromise']();
    const storage = sinon.stub(localStorage, 'setItem', (type, item) => {
      if (type === 'jwt') {
        expect(item).to.be.equal(response.token);
      }
      if (type === 'user') {
        expect(item).to.be.equal(JSON.stringify(response.user))
      }
    });

    instance['verifyAccount']();
    verify.resolves(response);
    expect(storage).to.have.been.calledTwice;
    verify['restore']();
    storage.restore();
  });

  it('check if account verification shows verification error', () => {
    const verify = sinon.stub(api, 'verify')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.verifyError).to.be.false;
    expect(instance.state.verifySuccess).to.be.false;

    instance['verifyAccount']();
    verify.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.verifyError).to.be.true;
    expect(instance.state.verifySuccess).to.be.false;
    verify['restore']();
  });

  it('check if account verification shows unexpected network error', () => {
    const verify = sinon.stub(api, 'verify')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.networkErr).to.be.false;
    expect(instance.state.verifyError).to.be.false;
    expect(instance.state.verifySuccess).to.be.false;

    instance['verifyAccount']();
    verify.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.true;
    expect(instance.state.verifyError).to.be.false;
    expect(instance.state.verifySuccess).to.be.false;
    verify['restore']();
  });
});

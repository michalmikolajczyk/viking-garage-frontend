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
import { default as Offers } from './';

describe('Signin: <Offers />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Offers />);
    instance = wrapper.instance();    
  });

  it('check for inner components', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('Container')).to.have.length(1);
    expect(wrapper.find('Search')).to.have.length(1);
  });

  it('check if verification run on componentDidMount', (done) => {
    sinon.spy(Offers.prototype, 'componentDidMount');

    const get = sinon.stub(api, 'get', () => {
      return Promise.resolve('data');
    });

    const wrapper = mountWithTheme(<Offers />);
    expect(get).to.be.calledOnce;
    expect(Offers.prototype.componentDidMount).to.be.calledOnce;
    get.restore();
    // sometimes it takes very long (> 2 sec) to render all components with mount
    done();
  });

  // it('check if verification action works properly', () => {
  //   const verify = sinon.stub(api, 'verify')['returnsPromise']();
  //   const storage = sinon.stub(localStorage, 'setItem');
  //   instance.setState = sinon.spy(instance.setState)

  //   expect(instance.setState).to.not.have.been.called;
  //   expect(instance.state.networkErr).to.be.false;
  //   expect(instance.state.verifyError).to.be.false;
  //   expect(instance.state.verifySuccess).to.be.false;

  //   instance['verifyAccount']();
  //   verify.resolves(response);

  //   expect(storage).to.have.been.calledTwice;
  //   expect(instance.setState).to.have.been.calledOnce;
  //   expect(instance.state.networkErr).to.be.false;
  //   expect(instance.state.verifyError).to.be.false;
  //   expect(instance.state.verifySuccess).to.be.true;

  //   verify['restore']();
  //   storage.restore();
  // });

  // it('check if response with JWT and user is saved in localStorage', () => {
  //   const verify = sinon.stub(api, 'verify')['returnsPromise']();
  //   const storage = sinon.stub(localStorage, 'setItem', (type, item) => {
  //     if (type === 'jwt') {
  //       expect(item).to.be.equal(response.token);
  //     }
  //     if (type === 'user') {
  //       expect(item).to.be.equal(JSON.stringify(response.user))
  //     }
  //   });

  //   instance['verifyAccount']();
  //   verify.resolves(response);
  //   expect(storage).to.have.been.calledTwice;
  //   verify['restore']();
  //   storage.restore();
  // });

  // it('check if account verification shows verification error', () => {
  //   const verify = sinon.stub(api, 'verify')['returnsPromise']();
  //   instance.setState = sinon.spy(instance.setState);
  //   expect(instance.setState).to.not.have.been.called;
  //   expect(instance.state.networkErr).to.be.false;
  //   expect(instance.state.verifyError).to.be.false;
  //   expect(instance.state.verifySuccess).to.be.false;

  //   instance['verifyAccount']();
  //   verify.resolves({ err: 'no internet connection'});

  //   expect(instance.setState).to.have.been.calledOnce;
  //   expect(instance.state.networkErr).to.be.false;
  //   expect(instance.state.verifyError).to.be.true;
  //   expect(instance.state.verifySuccess).to.be.false;
  //   verify['restore']();
  // });

  // it('check if account verification shows unexpected network error', () => {
  //   const verify = sinon.stub(api, 'verify')['returnsPromise']();
  //   instance.setState = sinon.spy(instance.setState);
  //   expect(instance.state.networkErr).to.be.false;
  //   expect(instance.state.verifyError).to.be.false;
  //   expect(instance.state.verifySuccess).to.be.false;

  //   instance['verifyAccount']();
  //   verify.rejects('something gone wrong');

  //   expect(instance.setState).to.have.been.calledOnce;
  //   expect(instance.state.networkErr).to.be.true;
  //   expect(instance.state.verifyError).to.be.false;
  //   expect(instance.state.verifySuccess).to.be.false;
  //   verify['restore']();
  // });
});

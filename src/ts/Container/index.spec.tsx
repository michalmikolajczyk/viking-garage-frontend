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
import { default as Container } from './';
import { offers } from '../Detail/mockup';

describe('<Container />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Container><div /></Container>);
    instance = wrapper.instance();
  });

  it('should displays inner components', () => {
    expect(wrapper.find('MuiThemeProvider')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
    expect(wrapper.find('Footer')).to.have.length(1);
  });

  it('should loads offers immediately ', () => {
    const spy = sinon.spy(Container.prototype, 'componentDidMount');
    const get = sinon.stub(api, 'get', () => {
      return Promise.resolve([]);
    });

    const wrapper = mountWithTheme(<Container><div /></Container>);
    expect(get).to.be.calledTwice;
    expect(spy).to.be.calledOnce;
    get.restore();
    spy.restore();
  });

  it('should load more offers and displays them', async () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.list).to.be.deep.equal([{},{}]);
    expect(instance.state.loading).to.be.true;

    get.resolves(offers);
    await instance['update']();

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.list).to.be.deep.equal(offers.data);
    expect(instance.state.loading).to.be.false;
    
    get['restore']();    
    
  });

  it('should displays internet connection error', async () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.networkErr).to.be.false;

    get.rejects('no internet connection');
    await instance['update']();

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.true;
    get['restore']();
  });

  it('should displays unexpected network error', async () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.networkErr).to.be.false;

    get.rejects('something gone wrong');
    await instance['update']();

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.networkErr).to.be.true;
    get['restore']();
  });
});

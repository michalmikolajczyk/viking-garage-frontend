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
import { offers } from '../Detail/mockup';

const coords = {
  latitude: '52.185303',
  longitude: '21.047533',
};

describe('<Offers />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Offers />);
    instance = wrapper.instance();
  });

  it('check for inner components', () => {
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('Search')).to.have.length(1);
  });

  it('check if loads offers on componentDidMount', (done) => {
    const spy = sinon.spy(Offers.prototype, 'componentDidMount');
    const get = sinon.stub(api, 'get', () => {
      return Promise.resolve([]);
    });

    const wrapper = mountWithTheme(<Offers />);
    expect(get).to.be.calledOnce;
    expect(spy).to.be.calledOnce;
    get.restore();
    spy.restore();
    // sometimes it takes very long (> 2 sec) to render all components with mount
    done();
  });

  it('check if sets coordinates on componentDidMount', () => {
    const get = sinon.stub(api, 'get', () => Promise.resolve())
    const wrapper = mountWithTheme(<Offers />);
    expect(wrapper.state().position).to.be.deep.equal(coords)
    get.restore();
  });

  it('check if loading data works properly', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState)

    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.data).to.be.deep.equal([]);
    expect(instance.state.loading).to.be.true;

    instance['loadMore']();
    get.resolves(offers);

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.data).to.be.deep.equal(offers);
    expect(instance.state.loading).to.be.false;

    get['restore']();
  });

  it('check if loads data on backend error', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.data).to.be.deep.equal([]);
    expect(instance.state.loading).to.be.true;

    instance['loadMore']();
    get.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.data).to.be.deep.equal(offers);
    expect(instance.state.loading).to.be.false;
    get['restore']();
  });

  it('check if loads data on unexpected network error', () => {
    const get = sinon.stub(api, 'get')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.data).to.be.deep.equal([]);
    expect(instance.state.loading).to.be.true;

    instance['loadMore']();
    get.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.data).to.be.deep.equal(offers);
    expect(instance.state.loading).to.be.false;
    get['restore']();
  });
});

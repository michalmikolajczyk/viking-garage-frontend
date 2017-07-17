import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { mountWithTheme } from '../helpers/test-theme';
import * as _ from 'lodash';
import Type from './Type';

const rawItems = {
  Motorcycle: [
    'Groupon',
    'Off-road',
    'Street',
    'Dual-sport',
    'Scooter',
    'Electric',
    'Mini',
  ],
};

const items = _.flatten(_.keys(rawItems).map(item => [
  item,
  ...rawItems[item].map(i => `${item}#${i}`),
]));

describe('Search <Type />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Type />);
    expect(wrapper.find('.input')).to.have.length(1);
    expect(wrapper.find('IconWrap')).to.have.length(1);
    expect(wrapper.find('SelectField')).to.have.length(1);
  });

  it('check if toggle one item works', () => {
    const wrapper = shallow(<Type filter={() => {}} />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onChange'](undefined, undefined, ['Motorcycle#Off-road']);
    expect(instance.setState).to.have.been.calledOnce;
    // convert set to array
    expect([...instance.state.values]).to.be.deep.equal(['Motorcycle#Off-road']);
  });

  it('check if toggle group will add all items from group', () => {
    const wrapper = shallow(<Type filter={() => {}} />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onChange'](undefined, undefined, ['Motorcycle']);
    expect(instance.setState).to.have.been.calledOnce;
    expect([...instance.state.values]).to.be.deep.equal(items);
  });

  it('check if unchecking one item from group will untoggle group label', () => {
    const wrapper = shallow(<Type filter={() => {}} />);
    const instance = wrapper.instance();
    instance['onChange'](undefined, undefined, ['Motorcycle']);
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onChange'](undefined, undefined, items.slice(0, -1));
    expect(instance.setState).to.have.been.calledOnce;
    expect([...instance.state.values]).to.not.contain('Motorcycle');
  });

  it('check if checking all items from group will toggle group', () => {
    const wrapper = shallow(<Type filter={() => {}} />);
    const instance = wrapper.instance();
    for (let i = 2; i < items.length; i++) {
      instance['onChange'](undefined, undefined, items.slice(1, i));
    }
    expect([...instance.state.values]).to.not.contain('Motorcycle');
    expect([...instance.state.values]).to.be.deep.equal(items.slice(1).slice(0, -1));
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onChange'](undefined, undefined, items.slice(1));
    expect(instance.setState).to.have.been.calledOnce;
    expect([...instance.state.values]).to.contain('Motorcycle');
  });
});

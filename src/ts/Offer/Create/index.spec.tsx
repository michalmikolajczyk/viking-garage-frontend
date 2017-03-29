import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { shallow } from 'enzyme';
import { mountWithTheme } from '../../helpers/test-theme';
import { default as Create } from './';

describe('Offer <Create />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('.main-view')).to.have.length(1);
    expect(wrapper.find('.side-view')).to.have.length(1);

    expect(wrapper.find('Select')).to.have.length(1);
    expect(wrapper.find('General')).to.have.length(1);
    expect(wrapper.find('DropImage')).to.have.length(1);
    expect(wrapper.find('Permissions')).to.have.length(1);
    expect(wrapper.find('Sideview')).to.have.length(1);
  });

  it('check if changing offer type works', () => {
    const wrapper = shallow(<Create />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.selected).to.be.equal(1);
    instance['onSelect'](undefined, undefined, 0);
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.selected).to.be.equal(0);
  });
});

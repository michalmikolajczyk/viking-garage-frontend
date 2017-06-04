import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { mountWithTheme } from '../helpers/test-theme';
import { shallow } from 'enzyme';
import Accordion from './';

describe('<Accordion />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Accordion open={true} offer={[]} header="Header title" />);
    expect(wrapper.find('.accordion')).to.have.length(1);
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('Table')).to.have.length(1);
  });

  it('check for closed accordion', () => {
    const wrapper = shallow(<Accordion />);
    expect(wrapper.find('.accordion')).to.have.length(1);
    expect(wrapper.find('Table')).to.have.length(0);
  });

  it('check opening accordion with click on header', () => {
    const wrapper = mountWithTheme(<Accordion open={false} offer={[]} header="Header title" />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(wrapper.find('.table')).to.have.length(0);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.open).to.be.false;
    instance['toggle']();
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.open).to.be.true;
    expect(wrapper.find('.table')).to.have.length(1);
  });
});

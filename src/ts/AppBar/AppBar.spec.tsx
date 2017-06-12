import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { default as AppBarVG } from './index';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { mountWithTheme } from '../helpers/test-theme';
const expect = chai.expect;
chai.use(sinonChai);

describe('<AppBarVG />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<AppBarVG />);
    expect(wrapper.find('AppBar')).to.have.length(1);
    expect(wrapper.find('.app-bar')).to.have.length(1);
  });

  it('check if bottom line will show up when window.scrollY > 0', () => {
    const wrapper = mountWithTheme(<AppBarVG />);
    expect(wrapper.state()['visible']).to.be.false;
    expect(wrapper.find('.app-bar-line')).to.have.length(0);
    expect(wrapper.find('.filter')).to.have.length(0);

    window.scrollTo(0, 100);
    const instance = wrapper.instance();
    const handleScroll = sinon.spy(instance, 'handleScroll');
    instance['handleScroll']();
    wrapper.update();

    expect(handleScroll).to.have.been.called;
    expect(wrapper.state()['visible']).to.be.true;
    expect(wrapper.find('.app-bar-line')).to.have.length(1);
  });
});

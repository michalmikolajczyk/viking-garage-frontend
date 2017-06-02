import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { mountWithTheme } from '../helpers/test-theme';
import FormWrap from './FormWrap';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

describe('<FormWrap />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<FormWrap><div className="childrens" /></FormWrap>)
    expect(wrapper.find('#detail-wrap')).to.have.length(1);
    expect(wrapper.find('.detail-form')).to.have.length(1);
    expect(wrapper.find('.child')).to.have.length(1);
    expect(wrapper.find('.childrens')).to.have.length(1);
  });

  it('check if invoked handleScroll on componentDidMount', () => {
    const componentDidMount = sinon.spy(FormWrap.prototype, 'componentDidMount');
    const wrapper = mountWithTheme(<FormWrap><div className="childrens" /></FormWrap>)
    const instance = wrapper.instance();

    expect(componentDidMount).to.be.calledOnce;
    expect(instance['requestId']).to.not.be.undefined;
    componentDidMount.restore();
  });
});

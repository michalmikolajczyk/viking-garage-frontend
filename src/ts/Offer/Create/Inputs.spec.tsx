import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { shallow } from 'enzyme';
import { formsyContext } from '../../helpers/test-theme';
import * as _ from 'lodash';
import { Form } from 'formsy-react';
import Inputs from './Inputs';
import motorcycle from '../../helpers/models/motorcycle';

describe('Offer/Create: <Inputs />', () => {
  it('check for inner components (empty table)', () => {
    const wrapper = shallow(<Inputs offer={[]} />, formsyContext());
    expect(wrapper.find('.table')).to.have.length(1);
    expect(wrapper.find('.header')).to.have.length(0);
    expect(wrapper.instance().state.open).to.be.true;
  });

  it('check for inner components (only header)', () => {
    const wrapper = shallow(<Inputs offer={[]} type="Header title" />, formsyContext());
    expect(wrapper.find('.table')).to.have.length(1);
    expect(wrapper.find('.header')).to.have.length(1);
    expect(wrapper.instance().state.open).to.be.false;
  });

  it('check for inputs of offer', () => {
    const wrapper = shallow(<Inputs offer={motorcycle()} />, formsyContext());
    expect(wrapper.find('.col')).to.have.length(motorcycle().length);
  });

  it('check if showing table with sub-offer works', () => {
    const wrapper = shallow(<Inputs type="Header title" />, formsyContext());
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.state.open).to.be.false;
    expect(instance.setState).to.not.have.been.called;
    instance['onChange']();
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.open).to.be.true;
  });
});

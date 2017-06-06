import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const { expect } = chai;
import Range from './Range';

const initValue = 8;

describe('Search <Range />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Range filter={() => {}}/>);
    expect(wrapper.find('.range')).to.have.length(1);
    expect(wrapper.find('FontIcon')).to.have.length(1);
    expect(wrapper.find('SelectField')).to.have.length(1);
    expect(wrapper.find('MenuItem')).to.have.length(21);
  });

  it('check if sets initial distans', () => {
    const wrapper = shallow(<Range filter={() => {}}/>);
    expect(wrapper.state().value).to.be.equal(initValue);
  });

  it('check if updates state on change distance', () => {
    const value = 2;
    const wrapper = shallow(<Range filter={() => {}}/>);
    const instance = wrapper.instance();

    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.value).to.be.equal(initValue);
    instance['onChange'](undefined, 0, value);

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.value).to.be.equal(value);
  });

  it('check if updates filter on change distance', () => {
    const value = 2;
    const filter = sinon.spy((params) => {
      expect(params).to.be.equal(value);
    });
    const wrapper = shallow(<Range filter={filter} />);
    const instance = wrapper.instance();
    instance['onChange'](undefined, 0, value);
  });
});

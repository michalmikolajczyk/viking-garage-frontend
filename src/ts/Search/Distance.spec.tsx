import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const { expect } = chai;
import Distance from './Distance';

const dist = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657];
const convert = (data) => data.map(d => ({text: `${d} km`, value: d}))

describe('Search <Distance />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Distance filter={() => {}}/>);
    expect(wrapper.find('.distance')).to.have.length(1);
    expect(wrapper.find('FontIcon')).to.have.length(1);
    expect(wrapper.find('AutoComplete')).to.have.length(1);
  });

  it('check if updates state on change distance', () => {
    const wrapper = shallow(<Distance filter={() => {}}/>);
    const instance = wrapper.instance();

    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onUpdateInput'](1);

    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.data).to.be.deep.equal(convert(dist));
  });

  it('check if updates filter on change distance', () => {
    const value = '120';
    const filter = sinon.spy((params) => {
      expect(params).to.be.equal(value);
    });
    const wrapper = shallow(<Distance filter={filter} />);
    const instance = wrapper.instance();
    instance['onNewRequest'](value);
  });
});

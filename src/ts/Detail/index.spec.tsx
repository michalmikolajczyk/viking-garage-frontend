import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Detail } from './index';
import { shallow } from 'enzyme';

describe('<Detail />', () => {
  it('check for inner components: Container', () => {
    const wrapper = shallow(<Detail params={{ id: 1 }} />);
    expect(wrapper.find('Container')).to.have.length(1);
  });
});

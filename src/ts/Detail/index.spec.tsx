import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Detail } from './index';
import { shallow } from 'enzyme';

describe('<Detail />', () => {
  it('check for inner components: Container, Offer and Form', () => {
    const wrapper = shallow(<Detail params={{ offer: 'husaberg-fe-390-poland-warsaw' }} />);
    expect(wrapper.find('Container')).to.have.length(1);
    expect(wrapper.find('Offer')).to.have.length(1);
    expect(wrapper.find('Form')).to.have.length(1);
  });
});

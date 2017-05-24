import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { default as Comments } from './';

describe('<Comments />', () => {
  it('check for inner component', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find('.comments')).to.have.length(1);
    expect(wrapper.find('Paper')).to.have.length(1);
  });
});

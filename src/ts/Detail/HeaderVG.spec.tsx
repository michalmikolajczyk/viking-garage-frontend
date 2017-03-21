import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import HeaderVG from './HeaderVG';
import { shallow } from 'enzyme';
import { offer } from './mockup';

describe('<HeaderVG />', () => {
  it('check for inner components: image, owner, etc.', () => {
    const wrapper = shallow(<HeaderVG offer={offer} />);
    expect(wrapper.find('.image')).to.have.length(1);
    expect(wrapper.find('.text')).to.have.length(1);
    expect(wrapper.find('.owner')).to.have.length(1);
    const owner = wrapper.find('.owner');
    expect(owner.find('.picture')).to.have.length(1);
    expect(owner.find('.fullname')).to.have.length(1);
    expect(owner.find('.location')).to.have.length(1);
  });
});

import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import DetailHeader from './DetailHeader';
import { shallow } from 'enzyme';
import * as offers from './mockup';
const offer = offers.ktm;

describe('<DetailHeader />', () => {
  it('check for inner components: image, owner, etc.', () => {
    const wrapper = shallow(<DetailHeader offer={offer} />);
    expect(wrapper.find('.image')).to.have.length(1);
    expect(wrapper.find('.text')).to.have.length(1);
    expect(wrapper.find('.owner')).to.have.length(1);
    const owner = wrapper.find('.owner');
    expect(owner.find('.picture')).to.have.length(1);
    expect(owner.find('.fullname')).to.have.length(1);
    expect(owner.find('.location')).to.have.length(1);
  });
});

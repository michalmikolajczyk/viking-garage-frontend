import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Comments from './Comments';
import { shallow } from 'enzyme';

describe('<Comments />', () => {
  it('check for inner components: comments, rate, author', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find('.comments')).to.have.length(1);
    expect(wrapper.find('.type')).to.have.length(4);
    expect(wrapper.find('.view-all')).to.have.length(1);
    const author = wrapper.find('.author').first();
    expect(author.find('.picture')).to.have.length(1);
    expect(author.find('.fullname')).to.have.length(1);
    expect(author.find('.location')).to.have.length(1);
  });
});

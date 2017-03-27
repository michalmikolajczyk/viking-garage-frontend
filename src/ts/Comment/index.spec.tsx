import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default ad Comments } from './';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Comments />', () => {
  it('check for inner components: comments, rate, author', function (done) {
    this.timeout(3000);
    const wrapper = mountWithTheme(<Comments />);
    expect(wrapper.find('.comments')).to.have.length(1);
    setTimeout(
      () => {
        expect(wrapper.find('.view-all')).to.have.length(1);
        expect(wrapper.find('.type')).to.have.length(4);
        const author = wrapper.find('.author').first();
        expect(author.find('.picture')).to.have.length(1);
        expect(author.find('.fullname')).to.have.length(1);
        expect(author.find('.location')).to.have.length(1);
        done();
      },
      2500);
  });
});

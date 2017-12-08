import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Header } from './';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Header />', () => {
  it('check for inner components: title, raido & text', () => {
    const wrapper = mountWithTheme(<Header />);
    expect(wrapper.find('.header')).to.have.length(1);
    expect(wrapper.find('.text')).to.have.length(1);
    expect(wrapper.find('.raido')).to.have.length(1);
  });

  it('check for descriptions in title and text', () => {
    const wrapper = mountWithTheme(<Header />);
    const text1 = 'Ride';
    const text2 = 'locals';
    expect(wrapper.find('.text').text()).contain(text1);
    expect(wrapper.find('.text').html()).contain(text2);
  });
});

import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Groupon } from './';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Groupon />', () => {
  it('should have the logo', () => {
    const wrapper = mountWithTheme(<Groupon />);
    expect(wrapper.find('.image-link img')).to.have.length(1);
  });

  it('contain contact info for booking', () => {
    const wrapper = mountWithTheme(<Groupon />);
    const wordname = 'GROUPON®';
    const tel1 = '667 772 402';
    const tel2 = '697 951 264';
    const email = 'ride@vikinggarage.com';
    expect(wrapper.text()).contain(wordname);
    expect(wrapper.text()).contain(tel1);
    expect(wrapper.text()).contain(tel2);
    expect(wrapper.text()).contain(email);
  });
});

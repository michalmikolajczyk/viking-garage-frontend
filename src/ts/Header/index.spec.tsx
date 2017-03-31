import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Header } from './';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Header />', () => {
  it('check for inner components: title, raido & text', () => {
    const wrapper = mountWithTheme(<Header />);
    expect(wrapper.find('.header')).to.have.length(1);
    expect(wrapper.find('.title')).to.have.length(1);
    expect(wrapper.find('.text')).to.have.length(1);
    expect(wrapper.find('.raido')).to.have.length(1);
  });

  it('check for descriptions in title and text', () => {
    const wrapper = mountWithTheme(<Header />);
    expect(wrapper.find('.title').html()).to.contain('VIKING');
    const text1 = 'rent motorcycles and gear';
    const text2 = 'find mechanics, coaches, trails';
    const text3 = 'everywhere in the world';
    expect(wrapper.find('.text').html()).contain(text1);
    expect(wrapper.find('.text').html()).contain(text2);
    expect(wrapper.find('.text').html()).contain(text3);
  });
});

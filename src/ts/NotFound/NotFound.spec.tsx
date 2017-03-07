import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as NotFound } from './index';
import { mountWithTheme } from '../helpers/test-theme';

describe('<NotFound />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<NotFound />);
    expect(wrapper.find('Container')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.equal('404... page not found!');
  });
});

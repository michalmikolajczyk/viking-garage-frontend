import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { default as NotFound } from './index';
import { mountWithTheme } from '../helpers/test-theme';

describe('<NotFound />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('AppBarVG')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.equal('404... page not found!');
  });
});

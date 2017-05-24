import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Container } from './index';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Container />', () => {
  it('check if all subcomponents are rendered', () => {
    const wrapper = mountWithTheme(<Container />);
    expect(wrapper.find('AppBar')).to.have.length(1);
    expect(wrapper.find('Footer')).to.have.length(1);
  });

  it('check if children are rendered', () => {
    const wrapper = mountWithTheme(<Container><div className="children"></div></Container>);
    expect(wrapper.find('.children')).to.have.length(1);
  });
});

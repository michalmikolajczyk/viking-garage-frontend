import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Detail } from './index';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Detail />', () => {
  it('check for inner components: Container and traits', () => {
    const wrapper = mountWithTheme(<Detail params={{ offer: 'husaberg-fe-390-poland-warsaw' }} />);
    expect(wrapper.find('Container')).to.have.length(1);
    expect(wrapper.find('.image')).to.have.length(1);
    expect(wrapper.find('.ride-btn')).to.have.length(1);
  });
});

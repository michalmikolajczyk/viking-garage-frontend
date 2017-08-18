import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Footer } from './index';
import { mountWithTheme } from '../helpers/test-theme';

describe('<Footer />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<Footer />);
    expect(wrapper.find('.footer')).to.have.length(1);
    expect(wrapper.find('.contact')).to.have.length(1);
    expect(wrapper.find('.copyright')).to.have.length(1);
  });

  it('check for social media links', () => {
    const wrapper = mountWithTheme(<Footer />);
    expect(wrapper.find('a[href="https://www.instagram.com/vikinggarage"]')).to.have.length(1);
    expect(wrapper.find('a[href="https://www.facebook.com/vikinggarage"]')).to.have.length(1);
    expect(wrapper.find('a[href="https://github.com/michalmikolajczyk/"]')).to.have.length(1);
    expect(wrapper.find('a[href="mailto:ride@vikinggarage.com"]')).to.have.length(1);
    expect(wrapper.find('a[href="https://vikinggarage.slack.com"]')).to.have.length(1);
    expect(wrapper.find('a[href="tel:+48697951264"]')).to.have.length(1);
    expect(wrapper.find('a[href="skype:michaljanmikolajczyk?chat"]')).to.have.length(1);
  });
});

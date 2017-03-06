import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Menu } from './index';
import { mountWithTheme } from '../helpers/test-theme';
import * as sinon from 'sinon';

describe('<Menu />', () => {
  it('check for inner components: category buttons', () => {
    const wrapper = mountWithTheme(<Menu />);
    expect(wrapper.find('[href="/bike-owners"]')).to.have.length(1);
    expect(wrapper.find('[href="/guides-coaches"]')).to.have.length(1);
    expect(wrapper.find('[href="/mechanics"]')).to.have.length(1);
    expect(wrapper.find('[href="/faq"]')).to.have.length(1);
    expect(wrapper.find('[href="/signin"]')).to.have.length(1);
    expect(wrapper.find('[href="/login"]')).to.have.length(1);
  });

  it('check if user logged in display user menu', () => {
    const stub = sinon.stub(window.localStorage, 'getItem')
      .returns({name: 'User', email: 'user@example.com'})
    const wrapper = mountWithTheme(<Menu />);
    expect(stub.calledOnce).to.be.true;
    expect(wrapper.find('[href="/signin"]')).to.have.length(0);
    expect(wrapper.find('[href="/login"]')).to.have.length(0);
    expect(wrapper.find('.user-profile')).to.have.length(1);
    stub.restore();
  });
});

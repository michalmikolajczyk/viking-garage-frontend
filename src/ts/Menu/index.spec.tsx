import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Menu } from './index';
import { mountWithTheme } from '../helpers/test-theme';
import * as sinon from 'sinon';
const usersFlag = process.env.USERS || false;

describe('<Menu />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<Menu refresh={() => {}} />);
    expect(wrapper.find('.menu')).to.have.length(1);
    expect(wrapper.find('.menu-item')).to.have.length(5);
  });

  it('check if user logged in display user menu', () => {
    if (!usersFlag) return true;
    const stub = sinon.stub(localStorage, 'getItem')
      .returns(JSON.stringify({ image: 'url-to-image', email: 'user@example.com' }));
    const wrapper = mountWithTheme(<Menu refresh={() => {}} />);
    expect(stub.callCount).to.equal(4)
    expect(wrapper.find('.user-profile')).to.have.length(1);
    expect(wrapper.find('.menu')).to.have.length(1);
    expect(wrapper.find('.menu-item')).to.have.length(6);
    stub.restore();
  });
});

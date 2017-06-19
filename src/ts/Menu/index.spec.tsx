import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Menu } from './index';
import { mountWithTheme } from '../helpers/test-theme';
import * as sinon from 'sinon';

describe('<Menu />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<Menu />);
    expect(wrapper.find('.menu')).to.have.length(1);
    expect(wrapper.find('.menu-item')).to.have.length(4);
  });

  // it('check if user logged in display user menu', () => {
  //   const stub = sinon.stub(window.localStorage, 'getItem')
  //     .returns(JSON.stringify({ image: 'url-to-image', email: 'user@example.com' }));
  //   const wrapper = mountWithTheme(<Menu />);
  //   expect(stub.calledOnce).to.be.true;
  //   expect(wrapper.find('.user-profile')).to.have.length(1);
  //   expect(wrapper.find('.menu')).to.have.length(1);
  //   expect(wrapper.find('.menu-item')).to.have.length(4);
  //   stub.restore();
  // });
});

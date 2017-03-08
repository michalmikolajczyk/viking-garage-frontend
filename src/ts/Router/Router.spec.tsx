import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { default as Router } from './index';
import { shallow } from 'enzyme';

describe('<Router />', () => {
  it('check for all paths', () => {
    const paths = [
      '/',
      '/offer/:offer',
      '/login',
      '/reset',
      '/confirm/:email',
      '/change/:token',
      '/signin',
      '/check',
      '/verify/:token',
      '/bike-owners',
      '/guides-coaches',
      '/mechanics',
      '/faq',
      '*',
    ];
    const wrapper = shallow(<Router />);
    wrapper.find('Route').map((route) => {
      const path = route.props()['path'];
      expect(paths).to.contain(path);
    });
  });
});

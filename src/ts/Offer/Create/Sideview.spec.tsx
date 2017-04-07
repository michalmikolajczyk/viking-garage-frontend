import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Sideview from './Sideview';
import { shallow } from 'enzyme';

describe('Offer/Create: <Sideview />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Sideview />);
    expect(wrapper.find('.section')).to.have.length(1);
    expect(wrapper.find('.buttons')).to.have.length(1);
    expect(wrapper.find('.header').text()).to.be.equal('Permissions');
    expect(wrapper.find('[label="Accept"]')).to.have.length(1);
  });
});

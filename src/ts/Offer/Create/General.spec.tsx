import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import General from './General';
import { shallow } from 'enzyme';

describe('Offer/Create: <General />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<General />);
    expect(wrapper.find('[name="title"]')).to.have.length(1);
    expect(wrapper.find('[name="price"]')).to.have.length(1);
    expect(wrapper.find('[name="maxRental"]')).to.have.length(1);
    expect(wrapper.find('[name="minRental"]')).to.have.length(1);
    expect(wrapper.find('[name="brief"]')).to.have.length(1);
  });
});

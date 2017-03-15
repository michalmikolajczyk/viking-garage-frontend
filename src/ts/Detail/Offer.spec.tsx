import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Offer from './Offer';
import { shallow } from 'enzyme';

describe('<Offer />', () => {
  it('check for inner components: Header, Table and Comments', () => {
    const wrapper = shallow(<Offer params={{ offer: 'husaberg-fe-390-poland-warsaw' }} />);
    expect(wrapper.find('DetailHeader')).to.have.length(1);
    expect(wrapper.find('DetailTable')).to.have.length(1);
    expect(wrapper.find('Comments')).to.have.length(1);
  });
});

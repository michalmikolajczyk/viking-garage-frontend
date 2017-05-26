import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Offer from './Offer';
import { shallow } from 'enzyme';
import { offer } from './mockup';

describe('<Offer />', () => {
  it('check for inner components: Header & Accordions', () => {
    const wrapper = shallow(<Offer offer={offer} />);
    expect(wrapper.find('HeaderVG')).to.have.length(1);
    expect(wrapper.find('Accordion')).to.have.length(1);
  });
});

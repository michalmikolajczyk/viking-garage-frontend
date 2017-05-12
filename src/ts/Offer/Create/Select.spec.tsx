import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Select from './Select';
import { shallow } from 'enzyme';

describe('Offer/Create: <Select />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Select selected={1} onChange={() => undefined} />);
    expect(wrapper.find('.title')).to.have.length(1);
    expect(wrapper.find('.text').text()).to.be.equal('Add new offer:');
    expect(wrapper.find('DropDownMenu')).to.have.length(1);
  });
});

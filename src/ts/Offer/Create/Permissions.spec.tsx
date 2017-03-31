import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import Permissions from './Permissions';
import { shallow } from 'enzyme';

describe('Offer / Create: <Permissions />', () => {
  it('check for inner components', () => {
    const wrapper = shallow(<Permissions />);
    expect(wrapper.find('.header').text()).to.be.equal('Permissions');
    expect(wrapper.find('[label="More info"]')).to.have.length(1);
    expect(wrapper.find('[label="Decline"]')).to.have.length(1);
    expect(wrapper.find('[label="Accept"]')).to.have.length(1);
  });
});

import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import DetailTable from './DetailTable';
import { shallow } from 'enzyme';
import * as offers from './mockup';
const offer = offers.ktm;

describe('<DetailTable />', () => {
  it('check for inner components', () => {
    const rows = ['Engine Type', 'Capacity', 'Max Power', 'Torque', 'Seat Height'];
    const wrapper = shallow(<DetailTable offer={offer} />);
    const text = wrapper.debug();
    rows.map(row => expect(text).to.contain(row));
  });
});

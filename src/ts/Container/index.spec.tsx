import 'mocha';
import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './';

describe('<Container />', () => {
  it('should displays all subcomponents', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('MuiThemeProvider')).to.have.length(1);
    expect(wrapper.find('Wrapper')).to.have.length(1);
  });

  it('should display children component', () => {
    const wrapper = shallow(<Container><div className="children" /></Container>);
    expect(wrapper.find('.children')).to.have.length(1);
  });
});

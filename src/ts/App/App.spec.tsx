import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { default as App } from './index';
const expect = chai.expect;
chai.use(sinonChai);

describe('<App />', () => {
  it('check if App render properly', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Router')).to.have.length(1);
    expect(wrapper.find('MuiThemeProvider')).to.have.length(1);
  });
});

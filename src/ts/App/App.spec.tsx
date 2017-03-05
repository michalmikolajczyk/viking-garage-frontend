import 'mocha';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as chai from 'chai';
import { mount, shallow } from 'enzyme';
import App from './index';
import AppRouter from '../Router';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

describe('<App />', () => {
  it('should render AppRouter', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(AppRouter)).to.have.length(1);
  });
})

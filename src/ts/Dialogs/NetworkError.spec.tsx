import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { spy } from 'sinon';
import * as sinonChai from 'sinon-chai';
import NetworkError from './NetworkError';
import { mountWithTheme } from '../helpers/test-theme';
const expect = chai.expect;
import { shallow } from 'enzyme';
chai.use(sinonChai);

describe('<NetworkError />', () => {
  it('check for inner components: text and action buttons', () => {
    const title = 'Network Error';
    const body = 'Ups! It seems that we have some problems with network, try again later.';
    const wrapper = mountWithTheme(<NetworkError open={true} close={() => undefined} />);
    expect(wrapper.find('Dialog').prop('title')).to.equal(title);
    expect(wrapper.find('Dialog').prop('children')).to.equal(body);
    // FIXME: find button outside of wrapper
    // expect(wrapper.find('button')).to.have.length(1);
  });
});

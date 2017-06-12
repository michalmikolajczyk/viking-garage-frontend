import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';
require('sinon-stub-promise')(sinon);
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { formsyContext } from '../helpers/test-theme';
import * as moment from 'moment';
import * as _ from 'lodash';

import Contact from './';
import { offer } from '../Detail/mockup';
import * as api from './api';

const user = {
  name: 'Viking',
  email: 'viking.garage.app@gmail.com',
}

const success = {
  title: 'Success',
  body: 'Maan, that was nice!',
}

const message = 'special message';

describe('<Contact />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<Contact type="contact" success={success} button="btn" message={() => message}/>, formsyContext());
    instance = wrapper.instance();
  });

  it('check for form inputs: price, start & end date, equipment', () => {
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.find('Dialog')).to.have.length(1);
    expect(wrapper.find('ContactForm')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
    expect(wrapper.find('Reaction')).to.have.length(1);
  });

  it('check if submit action get proper data', () => {
    const contact = sinon.stub(api, 'contact', (params) => {
      expect(params.name).to.be.equal(user.name);
      expect(params.email).to.be.equal(user.email);
      expect(params.type).to.be.equal('contact');
      return Promise.resolve('ok');
    });
    instance['submit'](user);
    contact.restore();
  });

  it('check if submit action get proper data from getMessage() props', () => {
    const contact = sinon.stub(api, 'contact', (params) => {
      expect(params.body).to.be.equal(message);
      return Promise.resolve('ok');
    });
    instance['submit'](user);
    contact.restore();
  });

  it('check if submit action works properly', () => {
    const contact = sinon.stub(api, 'contact')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.openDialog).to.be.false;

    instance['submit'](user);
    contact.resolves();

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.open).to.be.false;
    expect(instance.state.openDialog).to.be.true;

    contact['restore']();
  });

  it('check if submit action shows backend error', () => {
    const contact = sinon.stub(api, 'contact')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    contact.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.true;
    contact['restore']();
  });

  it('check if submit action shows unexpected network error', () => {
    const contact = sinon.stub(api, 'contact')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    contact.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.openDialog).to.be.false;
    expect(instance.state.networkErr).to.be.true;
    contact['restore']();
  });
});

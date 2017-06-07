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

import FormVG from './FormVG';
import { offer } from '../Detail/mockup';
import * as api from './api';

const user = {
  name: 'Viking',
  email: 'viking.garage.app@gmail.com',
}

describe('<FormVG />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<FormVG offer={offer} />, formsyContext());
    instance = wrapper.instance();
  });

  it('check for form inputs: price, start & end date, equipment', () => {
    expect(wrapper.find('FormWrap')).to.have.length(1);
    expect(wrapper.find('FormPure')).to.have.length(1);
    expect(wrapper.find('RideDialog')).to.have.length(1);
    expect(wrapper.find('RideSuccess')).to.have.length(1);
    expect(wrapper.find('NetworkError')).to.have.length(1);
  });

  it('check if submit action get proper data', () => {
    const ride = sinon.stub(api, 'ride', (params) => {
      expect(params.name).to.be.equal(user.name);
      expect(params.email).to.be.equal(user.email);
      expect(params.offer).to.be.equal(offer.id);
      expect(params.startDate).to.be.equal(instance.state.startDate);
      expect(params.endDate).to.be.equal(instance.state.endDate);
      expect(params.equipmnent).to.be.equal(instance.state.equipmnent);
      expect(params.price).to.be.equal(`${instance.getPrice()} USD`);
      expect(params.total).to.be.equal(`${instance.getTotal()} USD`);
      expect(params.currency).to.be.equal('USD');
      return Promise.resolve('ok');
    });
    instance['submit'](user);
    ride.restore();
  });

  it('check if submit action works properly', () => {
    const ride = sinon.stub(api, 'ride')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideDialog).to.be.false;
    expect(instance.state.rideSuccess).to.be.false;

    instance['submit'](user);
    ride.resolves();

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideDialog).to.be.false;
    expect(instance.state.rideSuccess).to.be.true;

    ride['restore']();
  });

  it('check if submit action shows backend error', () => {
    const ride = sinon.stub(api, 'ride')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideSuccess).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    ride.resolves({ err: 'no internet connection'});

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideSuccess).to.be.false;
    expect(instance.state.networkErr).to.be.true;
    ride['restore']();
  });

  it('check if submit action shows unexpected network error', () => {
    const ride = sinon.stub(api, 'ride')['returnsPromise']();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideSuccess).to.be.false;
    expect(instance.state.networkErr).to.be.false;

    instance['submit']();
    ride.rejects('something gone wrong');

    expect(instance.setState).to.have.been.calledTwice;
    expect(instance.state.wait).to.be.false;
    expect(instance.state.rideSuccess).to.be.false;
    expect(instance.state.networkErr).to.be.true;
    ride['restore']();
  });

  it('check if total calculation works fine', () => {
    const days = [0, 7, -5];
    const price = 55;
    const start = moment().toDate();
    wrapper.instance()['startDateChange'](undefined, start);
    _.forEach(days, (day) => {
      const end = day > 0 ? moment().add(day, 'days').toDate() : moment().subtract(day, 'days').toDate();
      wrapper.instance()['endDateChange'](undefined, end);
      expect(instance.getTotal()).to.be.equal(((Math.abs(day) + 1) * price));
    });
  });
});

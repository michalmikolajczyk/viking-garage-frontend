import 'mocha';
import * as React from 'react';
import { shallow } from 'enzyme';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import UserPhoto from './UserPhoto';

const image = [
  {
    preview: 'url-to-image.png',
    type: 'image/png',
  },
];

describe('Profile: <UserPhoto />', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<UserPhoto />);
    instance = wrapper.instance();
  });

  it('check for inner components', () => {
    expect(wrapper.find('Paper')).to.have.length(1);
    expect(wrapper.find('Dropzone')).to.have.length(1);
    expect(wrapper.find('.image')).to.have.length(1);
  });

  it('check if adding profile image works', () => {
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    expect(instance.state.image).to.be.null;
    instance['onDrop'](image);
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.image).to.be.deep.equal(image);
  });
});

import 'mocha';
import * as React from 'react';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;
import { mountWithTheme } from '../../helpers/test-theme';
import * as _ from 'lodash';
import DropImage from './DropImage';

const image = {
  preview: 'url-to-image.png',
  type: 'image/png',
};
const images = [image];
const manyImages = _.range(5).map(() => image);

describe('Offer/Create: <DropImage />', () => {
  it('check for inner components', () => {
    const wrapper = mountWithTheme(<DropImage />);
    expect(wrapper.find('.image-upload')).to.have.length(1);
    expect(wrapper.find('.drop-area')).to.have.length(1);
    expect(wrapper.find('.gallery')).to.have.length(1);
  });

  it('check if adding images to gallery works', () => {
    const wrapper = mountWithTheme(<DropImage />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    expect(instance.setState).to.not.have.been.called;
    instance['onDrop'](images);
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.images).to.be.deep.equal(images);
    expect(wrapper.find('.gallery').find('.image')).to.have.length(1);
  });

  it('check if gallery take not more then 5 image', () => {
    const wrapper = mountWithTheme(<DropImage />);
    const instance = wrapper.instance();
    instance.setState = sinon.spy(instance.setState);
    instance['onDrop'](manyImages);
    expect(instance.setState).to.have.been.calledOnce;
    expect(instance.state.images).to.have.length(5);
    expect(wrapper.find('.gallery').find('.image')).to.have.length(5);
  });
});

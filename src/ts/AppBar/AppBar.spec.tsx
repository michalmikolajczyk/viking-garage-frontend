import 'mocha'
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { expect } from 'chai'
import { mount } from 'enzyme'
import AppBarVG from './index'
import * as sinon from 'sinon'

describe('<AppBarVG />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<AppBarVG />)
    expect(wrapper.find('AppBar')).to.have.length(1)
  })
})

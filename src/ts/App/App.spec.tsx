import 'mocha'
import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import App from './index'

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />)
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})

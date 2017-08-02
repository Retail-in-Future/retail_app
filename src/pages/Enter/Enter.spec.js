import React from 'react'
import { shallow } from 'enzyme'

import { Enter } from '.'
import Header from '../../components/Header'

describe('Enter component', () => {
  let component

  beforeEach(() => {
    component = shallow(<Enter username="admin" qrcode="admin$token" />)
  })

  it.skip('should render a header with title 扫码进入', () => {
    // https://github.com/facebook/react-native/issues/12440
    expect(component.find(Header)).toHaveLength(1)
  })
})

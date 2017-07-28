import React from 'react'
import { shallow } from 'enzyme'

import Login from './Login'
import LoginRequired from './LoginRequired'

describe('Login component', () => {
  it('should render login page when an authentication token is not present', () => {
    const component = shallow(<LoginRequired />)
    component.state = {
      token: ''
    }

    expect(component.find(Login)).toHaveLength(1)
  })
})

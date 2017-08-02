import React from 'react'
import { shallow } from 'enzyme'
import { Text } from 'react-native'

import Login from './Login/Login'
import { LoginRequired } from './LoginRequired'

describe('Login component', () => {
  it('should render login page when an authentication token is not present', () => {
    const component = shallow(<LoginRequired token="" />)

    expect(component.find(Login)).toHaveLength(1)
  })

  it('should render children component and no Login page when an authentication token is present', () => {
    const component = shallow(
      <LoginRequired token="not-empty">
        <Text>should render this</Text>
      </LoginRequired>
    )

    expect(component.find(Login)).toHaveLength(0)
    expect(component.find(Text)).toHaveLength(1)
  })
})

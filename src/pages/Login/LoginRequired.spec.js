import React from 'react'
import { shallow } from 'enzyme'
import { Text } from 'react-native'

import Login from './Login'
import LoginRequired from './LoginRequired'

describe('Login component', () => {
  // TODO: [Linesh][7/30/17] Enable these 2 tests after React 16 is officially released
  // and supported by Enzyme. Now Enzyme does not support React 16 alpha.
  // For more context: https://github.com/airbnb/enzyme/issues/1051
  it.skip('should render login page when an authentication token is not present', () => {
    const component = shallow(<LoginRequired />).setState({ token: '' })

    expect(component.find(Login)).toHaveLength(1)
  })

  it.skip('should render children component and no Login page when an authentication token is present', () => {
    const component = shallow(
      <LoginRequired>
        <Text>should render this</Text>
      </LoginRequired>
    ).setState(() => ({ token: 'something-not-empty' }))

    expect(component.find(Login)).toHaveLength(0)
    expect(component.find(Text)).toHaveLength(1)
  })
})
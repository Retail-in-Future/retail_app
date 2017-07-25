import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import Login from './Login'

describe('Login component', () => {
  it('should render username and password field and a login button', () => {
    const component = shallow(<Login />)

    const inputs = component.find(TextInput)

    expect(inputs).toHaveLength(2)
    expect(inputs.last().prop('secureTextEntry')).toBe(true)

    expect(component.find(Button)).toHaveLength(1)
  })
})

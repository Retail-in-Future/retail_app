import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import Login from './Login'

describe('Login component', () => {
  let component

  beforeEach(() => {
    component = shallow(<Login />)
  })

  it('should render username and password field and a login button', () => {
    expect(component.find(TextInput)).toHaveLength(2)
    expect(component.find(Button)).toHaveLength(1)
  })

  it('should password field being rendered as secure to protect password input', () => {
    expect(component.find(TextInput).last().prop('secureTextEntry')).toBe(true)
  })
})

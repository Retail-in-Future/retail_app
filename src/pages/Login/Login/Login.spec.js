import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { Login } from './Login'

describe('Login component', () => {
  let component

  beforeEach(() => {
    component = shallow(<Login />)
  })

  it('should render username and password field and a login button', () => {
    expect(component.find(TextInput)).toHaveLength(2)
    expect(component.find(Button)).toHaveLength(1)
  })

  it('should username field not being auto-capitalized and has a placeholder text', () => {
    const usernameInput = component.find(TextInput).first()

    expect(usernameInput.prop('autoCapitalize')).toBe('none')
    expect(usernameInput.prop('placeholder')).toBe('Username')
  })

  it('should password field be secure input, not auto-capitalized and have a placeholder text', () => {
    const passwordField = component.find(TextInput).last()

    expect(passwordField.prop('secureTextEntry')).toBe(true)
    expect(passwordField.prop('autoCapitalize')).toBe('none')
    expect(passwordField.prop('placeholder')).toBe('Password')
  })

  it('should disable login button when username is empty', () => {
    component = shallow(<Login username="" />)

    expect(component.find(Button).prop('disabled')).toBe(true)
  })

  it('should disable login button when password is empty', () => {
    component = shallow(<Login username="admin" />)

    component.find(TextInput).last().simulate('ChangeText', '')

    expect(component.find(Button).prop('disabled')).toBe(true)
  })

  it('should enable login button when both username and password have at least one character input', () => {
    component = shallow(<Login username="admin" />)

    component.find(TextInput).last().simulate('ChangeText', 'admin')

    expect(component.find(Button).prop('disabled')).toBe(false)
  })

  it('should call login function when login button is clicked', () => {
    const onLogin = jest.fn()
    component = shallow(<Login username="admin" onLogin={onLogin} />)

    component.find(Button).simulate('Press')

    expect(onLogin).toHaveBeenCalledWith('admin', '')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { Header as ReactNativeHeader } from 'react-native-elements'
import Header from '.'

describe('Header component', () => {
  it('should render a Header component with default title', () => {
    const component = shallow(<Header />)

    expect(component.find(ReactNativeHeader)).toHaveLength(1)
    expect(component.find(ReactNativeHeader).prop('centerComponent').text).toBe('Give me title')
  })

  it('should render a Header component with title HOME', () => {
    const component = shallow(<Header title="HOME" />)

    expect(component.find(ReactNativeHeader)).toHaveLength(1)
    expect(component.find(ReactNativeHeader).prop('centerComponent').text).toBe('HOME')
  })
})

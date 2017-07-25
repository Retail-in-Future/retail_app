import React from 'react'
import { shallow } from 'enzyme'
import { Header as ReactNativeHeader } from 'react-native-elements'
import Header from './Header'

describe('Header component', () => {
  it('should render a Header component', () => {
    const component = shallow(<Header />)

    expect(component.find(ReactNativeHeader)).toHaveLength(1)
  })
})

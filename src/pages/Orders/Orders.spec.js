import React from 'react'
import { shallow } from 'enzyme'

import Orders from '.'
import Header from '../../components/Header'

describe('Orders', () => {
  it('should render a header with title 购买记录', () => {
    const component = shallow(<Orders />)
    const header = component.find(Header)

    expect(header).toHaveLength(1)
    expect(header.prop('title')).toBe('购买记录')
  })
})

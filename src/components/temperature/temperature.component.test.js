import React from 'react'
import { mount } from 'enzyme'

import { Temperature } from './temperature.component'
import { Label, Value } from './temperature.component.styles'

describe('Temperature component', () => {
  const props = { temperature: { av: 5, mn: 1, mx: 10 } }

  test('should display average temperature', () => {
    const wrapper = mount(<Temperature {...props} />)

    expect(wrapper.find(Label).at(0).text()).toBe('Average');
    expect(wrapper.find(Value).at(0).text()).toBe('5 °C');
  })

  test('should display minimum temperature', () => {
    const wrapper = mount(<Temperature {...props} />)

    expect(wrapper.find(Label).at(1).text()).toBe('Minimum');
    expect(wrapper.find(Value).at(1).text()).toBe('1 °C');
  })

  test('should display average temperature', () => {
    const wrapper = mount(<Temperature {...props} />)

    expect(wrapper.find(Label).at(2).text()).toBe('Maximum');
    expect(wrapper.find(Value).at(2).text()).toBe('10 °C');
  })
})

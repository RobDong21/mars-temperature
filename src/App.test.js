import React from 'react'
import { mount } from 'enzyme'

import { App } from './App'
import { api } from './service/api'
import { Temperature } from './components/temperature/temperature.component'
import { Body } from './design/typography'

describe('App component', () => {
  const spyApi = jest.spyOn(api, 'getLatestMarsTemperature')

  beforeEach(() => {
    spyApi.mockReset()
  })

  test('should have Body component with "Latest known temperature on Mars" as text', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find(Body).text()).toBe('Latest known temperature on Mars');
  })

  test('should have Temperature component displayed after getLatestMarsTemperature is called', async () => {
    spyApi.mockReturnValue('somevalue')
    expect(spyApi).not.toHaveBeenCalled()

    const wrapper = mount(<App />)

    expect(wrapper.find(Temperature).exists()).toBe(false);

    await Promise.resolve()
    expect(spyApi).toHaveBeenCalled()

    wrapper.update()

    expect(wrapper.find(Temperature).exists()).toBe(true);
  })
})

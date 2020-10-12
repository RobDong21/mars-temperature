import React, { useState, useEffect } from 'react'

import { api } from './service/api'
import { Temperature } from './components/temperature/temperature.component'
import { Body } from './design/typography'

const App = () => {
  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    (async function () {
      try {
        const latestMarsTemperature = await api.getLatestMarsTemperature()
        setTemperature(latestMarsTemperature)
      } catch (e) {
        console.error(e);
      }
    })()
  }, [])

  return (
    <div>
      <Body>Latest known temperature on Mars</Body>
      {
        temperature && <Temperature temperature={temperature} />
      }
    </div>
  )
}

export { App }

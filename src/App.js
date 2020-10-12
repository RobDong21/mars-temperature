import React, { useState, useEffect } from 'react'

import { api } from './service/api'
import { Temperature } from './components/temperature/temperature.component'

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
      {
        temperature && <Temperature temperature={temperature} />
      }
    </div>
  )
}

export { App }

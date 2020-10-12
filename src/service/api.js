const getLatestMarsTemperature = async () => {
  const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
  const dataJSON = await response.json()

  const latestSol = Math.max(...dataJSON.sol_keys)
  const latestTemperature = dataJSON[latestSol]['AT']

  return latestTemperature
}

const api = { getLatestMarsTemperature }

export { api } 
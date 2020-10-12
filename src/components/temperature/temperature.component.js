import React from 'react'
import PropTypes from 'prop-types'

import { Label, Value } from './temperature.component.styles'

const Temperature = ({ temperature: { av: average, mn: minimum, mx: maximum } }) => {
  return (<div>
    <Label>Average</Label>
    <Value>{average} °C</Value>
    <Label>Minimum</Label>
    <Value>{minimum} °C</Value>
    <Label>Maximum</Label>
    <Value>{maximum} °C</Value>
  </div>)
}

Temperature.propTypes = {
  temperature: PropTypes.shape({
    av: PropTypes.number,
    mn: PropTypes.number,
    mx: PropTypes.number,
  })
}

export { Temperature }
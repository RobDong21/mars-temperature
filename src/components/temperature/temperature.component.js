import React from 'react'
import PropTypes from 'prop-types'

const Temperature = ({ temperature: { av: average, mn: minimum, mx: maximum } }) => {
  return (<div>
    Average: {average}
    Minimum: {minimum}
    Maximum: {maximum}
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
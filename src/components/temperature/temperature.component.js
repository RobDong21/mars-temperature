import React from 'react'

const Temperature = ({ temperature: { av: average, mn: minimum, mx: maximum } }) => {
  return (<div>
    Average: {average}
    Minimum: {minimum}
    Maximum: {maximum}
  </div>)
}

export { Temperature }
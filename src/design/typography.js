import styled from 'styled-components'

import { FONTSIZE } from './fontsize.constant'
import { SPACING } from './spacing.constant'

const Body = styled.p`
  font-size: ${FONTSIZE.S};
  text-align: center;
  margin-bottom: ${SPACING.XL};
`

export { Body }
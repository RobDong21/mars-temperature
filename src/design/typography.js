import styled from 'styled-components'

import { FONTSIZE } from './fontsize.constant'
import { SPACING } from './spacing.constant'
import { BREAKPOINT } from './breakpoint.constant'

const Body = styled.p`
  font-size: ${FONTSIZE.XS};
  text-align: center;
  margin-bottom: ${SPACING.XL};

  @media only screen and (min-width: ${BREAKPOINT.tablet}) {
    font-size: ${FONTSIZE.S};
  }
`

export { Body }
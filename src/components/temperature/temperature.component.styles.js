import styled from 'styled-components'

import { BREAKPOINT } from '../../design/breakpoint.constant'
import { FONTSIZE } from '../../design/fontsize.constant'
import { SPACING } from '../../design/spacing.constant'

const Label = styled.p`
  font-size: ${FONTSIZE.S};
  text-align: center;
  margin-bottom: ${SPACING.S};
`

const Value = styled.p`
  font-size: ${FONTSIZE.M};
  text-align: center;
  margin-bottom: ${SPACING.L};

  @media only screen and (min-width: ${BREAKPOINT.tablet}) {
    font-size: ${FONTSIZE.L};
  }

  @media only screen and (min-width: ${BREAKPOINT.desktop}) {
    font-size: ${FONTSIZE.XL};
  }
`

export { Label, Value }
import styled from 'styled-components'

import { BREAKPOINT } from '../../design/breakpoint.constant'
import { FONTSIZE } from '../../design/fontsize.constant'

const Label = styled.p`
  font-size: ${FONTSIZE.S};
  text-align: center;
  margin-bottom: 8px;
`

const Value = styled.p`
  font-size: ${FONTSIZE.M};
  text-align: center;
  margin-bottom: 56px;

  @media only screen and (min-width: ${BREAKPOINT.tablet}) {
    font-size: ${FONTSIZE.L};
  }

  @media only screen and (min-width: ${BREAKPOINT.desktop}) {
    font-size: ${FONTSIZE.XL};
  }
`

export { Label, Value }
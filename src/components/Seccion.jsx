import styled, { css } from 'styled-components'
import { COLORS, TextSmall, DISTANCES } from '../global/GlobalStyles'
import {
  column_1_span2,
  column_3_span2,
  column_5_span6,
  seccionLayout,
} from '../styles/grid'
import { mediaQueryTablet } from '../styles/sizes'
import Text from './Text'
import { Titulo, Titulo2, Titulo3 } from './Titulos'

const Seccion = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${DISTANCES.small};
  background-color: ${props => props.backgroundColor || COLORS.gray01};
  /* padding: calc(8px + 1.5625vw); */
`

export default Seccion

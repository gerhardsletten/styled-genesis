import styled from 'styled-components'

const StyledGenesis = styled.div`
  ${props => props.m ? `margin: ${props.m}rem;` : ''}
  ${props => props.mt ? `margin-top: ${props.mt}rem;` : ''}
  ${props => props.mb ? `margin-bottom: ${props.mb}rem;` : ''}
  ${props => props.ml ? `margin-left: ${props.ml}rem;` : ''}
  ${props => props.mr ? `margin-right: ${props.mr}rem;` : ''}

  ${props => props.p ? `padding: ${props.p}rem;` : ''}
  ${props => props.pt ? `padding-top: ${props.pt}rem;` : ''}
  ${props => props.pb ? `padding-bottom: ${props.pb}rem;` : ''}
  ${props => props.pl ? `padding-left: ${props.pl}rem;` : ''}
  ${props => props.pr ? `padding-right: ${props.pr}rem;` : ''}

  ${props => props.size ? `font-size: ${props.theme.sizes && props.theme.sizes[props.size] ? props.theme.sizes[props.size] : props.size}rem;` : ''}

  ${props => props.color ? `color: ${props.theme.colors && props.theme.colors[props.color] ? props.theme.colors[props.color] : props.color};` : ''}
  ${props => props.bg ? `background-color: ${props.theme.colors && props.theme.colors[props.bg] ? props.theme.colors[props.bg] : props.bg};` : ''}

  ${props => props.center ? `text-align: center;` : ''}
  ${props => props.left ? `text-align: left;` : ''}
  ${props => props.right ? `text-align: right;` : ''}

  ${props => props.bold ? `font-weight: bold;` : ''}
  ${props => props.em ? `font-style: italic;` : ''}
  ${props => props.ucase ? `text-transform: uppercase;` : ''}

  ${props => props.d ? `display: ${props.d};` : ''}
  ${props => props.flex ? `flex: ${props.flex === true ? '1' : props.flex};` : ''}
  ${props => props.alignItems ? `align-items: ${props.alignItems};` : ''}
  ${props => props.justifyContent ? `justify-content: ${props.alignItems};` : ''}
`

export default StyledGenesis

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background:  ${props => props.theme.palette.backgroundColor};
    font-family: 'Poppins', sans-serif;
    color: rgb(160, 160, 160);
    margin: 0px;
  }
`
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  html {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    background-color: #f4f5f6;
    // background: linear-gradient(179.34deg, rgb(154, 156, 244) 0.41%, rgb(196, 180, 244) 29.85%, rgb(236, 174, 221) 62.79%, rgb(255, 253, 203) 99.49%) 0% 0% / cover;
    transition: all 0.34s ease;
  }
`
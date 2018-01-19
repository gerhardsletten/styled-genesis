import React from 'react'
import {injectGlobal, ThemeProvider} from 'styled-components'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const theme = {
  colors: {
    gray: '#999',
    black: '#000',
    lightGray: '#f2f2f2',
    primary: '#00AEEE',
    primaryActive: '#0095DA',
    secondary: '#FF931E',
    secondaryActive: '#D47A19'
  },
  sizes: {
    small: 1.6,
    normal: 1.8,
    large: 2.4
  }
}

injectGlobal`
  * {
    font-family: "Avenir Next", Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-weight: 300;
    line-height: 1.4;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 1.8rem;
  }
`

const render = Component => {
  ReactDOM.render(
    (
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </AppContainer>
    ),
    document.getElementById('main')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default
    render(NextRoot)
  })
}

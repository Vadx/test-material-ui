import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { StylesProvider } from '@material-ui/styles'

import { Header } from './components/Header'
import { TopStatusBar } from './components/TopStatusBar'
import { CompaignsTab } from './components/CompaignsTab'

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3baaa6',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e95b5b',
      contrastText: '#fff'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <StylesProvider injectFirst>
        <div className="App">
          <Header />
          <TopStatusBar />
          <CompaignsTab />
        </div>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App

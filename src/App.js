import React from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { StylesProvider } from '@material-ui/styles'

// import { Header } from './components/Header'
// import { TopStatusBar } from './components/TopStatusBar'
// import { CampaignsTab } from './components/CampaignsTab'
import { Login } from './components/Login'

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
          {/* <Header />
          <TopStatusBar />
          <CampaignsTab /> */}
          <Login />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App

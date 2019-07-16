import React from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { Header } from './modules/Header'
import { TopStatusBar } from './modules/TopStatusBar'
import { CampaignsTab } from './modules/CampaignsTab'

// import { Login } from '../components/Login'
// import { ForgotPassword } from '../components/ForgotPassword'
// import { ChangePassword } from '../frontend/modules/ChangePassword'

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
      <Header />
      <TopStatusBar />
      <CampaignsTab />
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ChangePassword /> */}
    </ThemeProvider>
  )
}

export default App

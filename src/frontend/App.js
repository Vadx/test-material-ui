import React from 'react'
// import { BrowserRouter as Switch, Route, Router } from 'react-router-dom'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

// import { routes, renderRoutesWithSubRoutes } from './routes'

import { Header } from './common/Header'
// import { TopStatusBar } from './modules/TopStatusBar'
// import { CampaignsTab } from './modules/CampaignsTab'
// import { Messages } from './modules/Messages'
import { BrandAccountSettings } from './modules/BrandAccountSettings'

// import { Login } from '../../components/Login'
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
      {/* <TopStatusBar /> */}
      {/* <CampaignsTab /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ChangePassword /> */}
      <BrandAccountSettings />
    </ThemeProvider>
  )
}

export default App

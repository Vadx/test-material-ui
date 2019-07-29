import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { routes, RouteWithSubRoutes } from './routes'
import { HeaderBrand } from './common/HeaderBrand'
import { HeaderInfluencer } from './common/HeaderInfluencer'

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
    <Router>
      <ThemeProvider theme={outerTheme}>
        <Route path={['/creator']} component={HeaderInfluencer} />
        <Route path={['/brand']} component={HeaderBrand} />

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </ThemeProvider>
    </Router>
  )
}

export default App
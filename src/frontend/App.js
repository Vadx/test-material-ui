import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { routes, RouteWithSubRoutes } from './routes'
import { HeaderBrand } from './common/HeaderBrand'
import { HeaderInfluencer } from './common/HeaderInfluencer'

import { DemoPage } from './DemoPage'

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

const useStyles = makeStyles({
  wrap: {
    paddingTop: '100px'
  }
})

function App() {
  const classes = useStyles()
  return (
    <Router>
      <ThemeProvider theme={outerTheme}>

        <Route exact path={['/']} component={DemoPage} />
        <Route path={['/creator']} component={HeaderInfluencer} />
        <Route path={['/brand']} component={HeaderBrand} />

        <Box className={classes.wrap}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
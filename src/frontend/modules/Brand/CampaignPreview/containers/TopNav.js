import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Typography, Fab, Paper} from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles(theme => ({
  wrap: {
    borderRadius: 0,
    padding: '15px 20px',
    boxShadow: 'none'
  },
  styleFub: {
    padding: '5px 7px',
    minWidth: 'auto',
    borderRadius: '3px',
    boxShadow: 'none',
    height: '34px',
    marginRight: '20px'
  }
}))

export function TopNav () {
  const classes = useStyles()
  const AdapterButton = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  return (
    <Paper className={classes.wrap}>
      <Box 
        display="flex" 
        justify="center" 
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" xs={8}>
          <Fab component={AdapterButton} className={classes.styleFub} variant="extended" to="/brand/campaigns"><ArrowBack /></Fab>
          <Typography variant="subtitle1" gutterBottom>Campaigns</Typography>
        </Box>
      </Box>
    </Paper>
  )
}

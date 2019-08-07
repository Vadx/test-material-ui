import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5, 2),
    background: '#3e4958',
    marginBottom: '40px',
    marginTop: '-42px'
  },
  CreateCampaign: {
    borderRadius: '25px',
    fontSize: '11px',
    marginRight: '20px'
  },
  ReadTerms: {
    borderRadius: '25px',
    fontSize: '11px',
    marginRight: '20px',
    background: '#e6b256',
    '&:hover': {
      background: '#d4a146',
    }
  },
}))

export function TopBar() {
  const classes = useStyles()
  const AdapterButton = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  return (
    <Box className={classes.root}>
      <Button component={AdapterButton} to="/brand/create" className={classes.CreateCampaign} variant="contained" color="primary">Create New Campaign</Button>
      <Button component={AdapterButton} to="/brand/terms" className={classes.ReadTerms} variant="contained" color="primary">Read Platform Terms</Button>
    </Box>
  )
}

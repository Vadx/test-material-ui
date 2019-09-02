import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#3baaa6',
    borderRadius: 0,
    boxShadow: 'none',
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  allUsers: {
    padding: '7px 15px',
    background: '#308c89',
    boxShadow: '0 0 1px #3dc3bf',
    marginRight: 20,
    color: '#fff'
  },
  checkboxWrap: {
    color: '#fff'
  }
}))

const AddButton = withStyles(theme => ({
  root: {
    borderColor: '#48c7c3',
    background: '#339895',
    color: '#fff',
    marginRight: 20
  }
}))(Button)

const Deselected = withStyles(theme => ({
  root: {
    color: '#7df1ec'
  }
}))(Button)

const HideCheckbox = withStyles({
  root: {
    color: '#fff',
    '&$checked': {
      color: '#fff',
    }
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)


export default function FooterSelectedUsers () {
  const classes = useStyles()

  return (
    <Paper className={classes.wrapper}>
      <Typography className={classes.allUsers} component="span" variant="body2">1 Influencers Selected</Typography>
      <AddButton variant="outlined" color="primary">Add to segment</AddButton>
      <FormControlLabel
        className={classes.checkboxWrap}
        control={
          <HideCheckbox
            value="checkedA"
          />
        }
        label="Hide Other"
      />
      <Deselected>Deselected All</Deselected>
    </Paper>
  )
}

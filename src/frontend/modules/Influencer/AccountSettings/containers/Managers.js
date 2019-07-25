import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Typography, 
  Grid, 
  TextField, 
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  }
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell)

function createData(email, created, status) {
  return { email, created, status };
}

const rows = [
  createData('parkerjill (parkerjill@example.org)', '2017-05-15', 'active'),
  createData('webcomglob (webcomglob@example.org)', '2017-05-09', 'active')
]

export function Managers () {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="left">Created</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.email}>
                  <StyledTableCell component="th" scope="row">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.created}</StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.title}>Add a Manager</Typography>
          <TextField
            id="outlined-email-input"
            label="Email"
            name="email"
            placeholder="coworker@mycompany.com"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
          <Button variant="contained" color="primary" fullWidth style={{marginBottom: '30px'}}>Send Invite</Button>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '15px'}}>We’ll send your manager a link to login to your Grapevine account, apply to campaigns, and respond to brands on your behalf.</Typography>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '10px'}}>Your manager will have the same permissions as you have.</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

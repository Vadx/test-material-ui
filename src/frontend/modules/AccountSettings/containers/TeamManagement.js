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
  },
  title: {
    paddingBottom: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #eee'
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

export function TeamManagement () {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.title}>Team Management</Typography>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '25px'}}>Applied only to your account and will not affect other users connected to your company. </Typography>
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
          <Typography variant="h5" component="h3" className={classes.title}>Invite team members to join!</Typography>
          <TextField
            id="outlined-email-input"
            label="Email"
            name="email"
            placeholder="coworker@mycompany.com"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '30px'}}
          />
          <Button variant="contained" color="primary" fullWidth>Send Invite</Button>
        </Paper>
      </Grid>
    </Grid>
    
  )
}

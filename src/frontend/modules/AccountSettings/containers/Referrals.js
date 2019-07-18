import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Box,
  Typography, 
  Grid, 
  TextField, 
  Button,
  Link,
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
  styleBox: {
    background: '#3c4656',
    color: '#fff',
    padding: '3em',
    border: '15px solid #313c4e',
    marginBottom: '30px'
  },
  textDescription: {
    marginBottom: '15px',
    color: '#ddd'
  },
  footerText: {
    borderTop: '1px solid #46556d',
    paddingTop: '20px'
  },
  rightCol: {
    border: '1px solid #46556d',
    background: '#313c4e'
  }
}))

const StyledTextField = withStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    borderRadius: 4,
    'label + &': {
      backgroundColor: '#fff',
    },
    '&:hover': {
      backgroundColor: '#fff',
      borderRadius: 4,
    },
    label: {
      backgroundColor: '#fff',
    }
  }
}))(TextField)

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

export function Referrals () {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.styleBox}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={8}>
            <Typography variant="h4" component="h3">Your Creators on Grapevine.</Typography>
            <Typography variant="h6" component="h4" style={{marginBottom: '20px'}}>0% Booking Fees. Forever.</Typography>
            <Typography variant="body2" component="p" className={classes.textDescription}>Working with creators that aren't on Grapevine? Invite them to join the network to use the full power of the Grapevine Platform, including messaging, campaign tracking, content calendar, and analytics for no additional cost.</Typography>
            <Typography variant="body2" component="p" className={classes.textDescription}>The regular booking fee for any creator that you bring in will be waived - forever.</Typography>
            <Typography variant="body2" component="p" className={classes.textDescription}>All you need is their e-mail and YouTube or Instagram link, and we'll send them an e-mail to get them started.</Typography>
            <Typography variant="body2" component="p" className={classes.footerText}>If you have any questions, please reach out to us at <Link>support@grapevinelogic.com</Link>. </Typography>
          </Grid>
          <Grid className={classes.rightCol} item xs={4}>
            <StyledTextField
              id="outlined-email-input"
              label="Creator Email"
              type="email"
              name="email"
              autoComplete="Creator Email"
              placeholder="creator@gmail.com"
              margin="dense"
              variant="outlined"
              fullWidth
              style={{marginBottom: '25px'}}
            />
            <StyledTextField
              id="outlined-chanel-input"
              label="Creator Channel"
              name="chanel"
              autoComplete="Creator Channel"
              placeholder="https://www.youtube.com/channel/UCskeO20J7XcDQ-XO6t5B2Uw"
              margin="dense"
              variant="outlined"
              fullWidth
              style={{marginBottom: '25px'}}
            />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" fullWidth>Send Invite</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth>Bulk Invite</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

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
    </Box>
  )
}

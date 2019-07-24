import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Link,
  Button
} from '@material-ui/core'
import CloudDownload from '@material-ui/icons/CloudDownload'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
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

function createData(created, creator, deliverables, reference, satatus, amount) {
  return { created, creator, deliverables, reference, satatus, amount };
}

const rows = [
  createData('2019-01-07', 'moonshine br...', 'waiting', 'Credit payment', 'Credited', '$120.00'),
  createData('2019-01-10', 'grayer every...', 'waiting', 'Credit payment', 'Credited', '$519.60'),
  createData('2019-01-27', '', '', 'Account credit', 'Deducted', '$55,555.00')
]

export function Billing () {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Created</StyledTableCell>
                <StyledTableCell align="left">Creator</StyledTableCell>
                <StyledTableCell align="left">Deliverables</StyledTableCell>
                <StyledTableCell align="left">Reference</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Amount ($)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.created}>
                  <StyledTableCell component="th" scope="row">{row.created}</StyledTableCell>
                  <StyledTableCell align="left"><Link>{row.creator}</Link></StyledTableCell>
                  <StyledTableCell align="left">{row.deliverables}</StyledTableCell>
                  <StyledTableCell align="lert">{row.reference}</StyledTableCell>
                  <StyledTableCell align="right">{row.satatus}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Button color="primary" fullWidth>
          <CloudDownload className={classes.leftIcon} />
          Export
        </Button>
      </Grid>
    </Grid>
  )
}

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
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
  innerCol: {
    textAlign: 'center'
  }
}))

const rows = [
  createData('2019-01-07', 'Campaign Payment', '', '$120.00'),
  createData('2019-01-10', 'Campaign Payment', '', '$1330.00'),
  createData('2019-01-20', 'Campaign Payment', '', '$250.00')
]

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 13,
  }
}))(TableCell)

function createData(date, type, source, amount) {
  return { date, type, source, amount };
}

export function Earnings () {
  const classes = useStyles()
  return (

    <Paper className={classes.root}>
      <Grid container spacing={2} style={{marginBottom: '30px'}}>
        <Grid className={classes.innerCol} item xs>
          <Typography component="h5" variant="h6">This Week</Typography>
          <Typography component="h5" variant="h4">$250</Typography>
        </Grid>
        <Grid className={classes.innerCol} item xs>2</Grid>
        <Grid className={classes.innerCol} item xs>3</Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Source</StyledTableCell>
            <StyledTableCell align="right">Amount ($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.date}>
                  <StyledTableCell component="th" scope="row">{row.date}</StyledTableCell>
                  <StyledTableCell align="left">{row.type}</StyledTableCell>
                  <StyledTableCell align="left"><Link to={row.source}>Video</Link></StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

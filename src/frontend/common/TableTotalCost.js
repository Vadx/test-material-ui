import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 300,
    '& .MuiTableCell-head': {
      padding: '3px 5px'
    }
  },
  borderCol: {
    border: 0,
    padding: '3px 5px'
  }
}))

function createRow(desc, date, price) {
  return { desc, date, price }
}

const rows = [
  createRow('ToyTube video', '2019-10-02', '50')
]

export default function TableTotalCost() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="button" color="textSecondary">Deliverable</Typography></TableCell>
            <TableCell align="left"><Typography variant="button" color="textSecondary">Due Date</Typography></TableCell>
            <TableCell align="right"><Typography variant="button" color="textSecondary">Price</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.desc}>
              <TableCell className={classes.borderCol}>{row.desc}</TableCell>
              <TableCell className={classes.borderCol} align="left">{row.date}</TableCell>
              <TableCell className={classes.borderCol} align="right">{row.price}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className={classes.borderCol} />
            <TableCell className={classes.borderCol}><Typography variant="caption" color="textSecondary">Subtotal</Typography></TableCell>
            <TableCell className={classes.borderCol} align="right"><Typography variant="caption" color="textSecondary">$50.00</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.borderCol} />
            <TableCell className={classes.borderCol}><Typography variant="caption" color="textSecondary">Transaction Fee</Typography></TableCell>
            <TableCell className={classes.borderCol} align="right"><Typography variant="caption" color="textSecondary">$15.00</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.borderCol} />
            <TableCell className={classes.borderCol}><Typography variant="subtitle2" color="textSecondary">Total Cost</Typography></TableCell>
            <TableCell className={classes.borderCol} align="right"><Typography variant="subtitle2" >$15.00</Typography></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
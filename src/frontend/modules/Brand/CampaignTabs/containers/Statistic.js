import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
  borderCol: {
    border: 0,
    padding: '2px 5px'
  }
}))

function createData(name, views, clics, ctr, ctc, ctl) {
  return { name, views, clics, ctr, ctc, ctl }
}

const rows = [
  createData('$52.00', 0, 0, '-', '-', '-')
];

export function Statistic() {
  const classes = useStyles()

  return (
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.borderCol} align="center">Adspend</TableCell>
            <TableCell className={classes.borderCol} align="center">Views</TableCell>
            <TableCell className={classes.borderCol} align="center">Clics</TableCell>
            <TableCell className={classes.borderCol} align="center">CTR</TableCell>
            <TableCell className={classes.borderCol} align="center">CTC</TableCell>
            <TableCell className={classes.borderCol} align="center">CTL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell className={classes.borderCol} align="center">{row.name}</TableCell>
              <TableCell className={classes.borderCol} align="center">{row.views}</TableCell>
              <TableCell className={classes.borderCol} align="center">{row.clics}</TableCell>
              <TableCell className={classes.borderCol} align="center">{row.ctr}</TableCell>
              <TableCell className={classes.borderCol} align="center">{row.ctc}</TableCell>
              <TableCell className={classes.borderCol} align="center">{row.ctl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}
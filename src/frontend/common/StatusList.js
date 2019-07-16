import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0),
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
    marginBottom: theme.spacing(3)
  },
  borderCol: {
    border: 0,
    padding: '2px 5px'
  }
}))

function createData(name, due, status) {
  return { name, due, status }
}

const rows = [
  createData('Youtube Video', '07/18/2019', 'Pendings'),
  createData('Other Deliverables', '07/18/2019', 'Pendings')
];

export function StatusList() {
  const classes = useStyles()

  return (
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.borderCol} align="left">Deliverable</TableCell>
            <TableCell className={classes.borderCol} align="center">Due By</TableCell>
            <TableCell className={classes.borderCol} align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell className={classes.borderCol} align="left"><Typography variant="caption">{row.name}</Typography></TableCell>
              <TableCell className={classes.borderCol} align="center"><Typography variant="caption">{row.due}</Typography></TableCell>
              <TableCell className={classes.borderCol} align="center"><Typography variant="caption">{row.status}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}
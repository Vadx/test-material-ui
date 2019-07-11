import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'

const TableCellStyled = styled(TableCell)`
  border: none;
  padding: 2px 5px;
`

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0),
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
    marginBottom: theme.spacing(3)
  },
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
            <TableCellStyled align="left">Deliverable</TableCellStyled>
            <TableCellStyled align="center">Due By</TableCellStyled>
            <TableCellStyled align="center">Status</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCellStyled align="left"><Typography variant="caption">{row.name}</Typography></TableCellStyled>
              <TableCellStyled align="center"><Typography variant="caption">{row.due}</Typography></TableCellStyled>
              <TableCellStyled align="center"><Typography variant="caption">{row.status}</Typography></TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}
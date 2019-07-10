import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

const TableCellStyled = styled(TableCell)`
  border: none;
  padding: 2px 5px;
`

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
            <TableCellStyled align="center">Adspend</TableCellStyled>
            <TableCellStyled align="center">Views</TableCellStyled>
            <TableCellStyled align="center">Clics</TableCellStyled>
            <TableCellStyled align="center">CTR</TableCellStyled>
            <TableCellStyled align="center">CTC</TableCellStyled>
            <TableCellStyled align="center">CTL</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCellStyled align="center">{row.name}</TableCellStyled>
              <TableCellStyled align="center">{row.views}</TableCellStyled>
              <TableCellStyled align="center">{row.clics}</TableCellStyled>
              <TableCellStyled align="center">{row.ctr}</TableCellStyled>
              <TableCellStyled align="center">{row.ctc}</TableCellStyled>
              <TableCellStyled align="center">{row.ctl}</TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}
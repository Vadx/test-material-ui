import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Paper, 
  IconButton, 
  Link,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core'

import {Settings, SaveAlt} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 2)
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

function createData(settings, campaign, status, yview, yclicks, yconversions, ilikes, total, exportall ) {
  return { settings, campaign, status, yview, yclicks, yconversions, ilikes, total, exportall };
}

const rows = [
  createData('', 'Campaign #0', 'active', '-', '-', 'active', '-', '-'),
  createData('', 'Campaign #1', 'active', '-', '-', 'active', '-', '-'),
  createData('', 'Campaign #2', 'active', '-', '-', 'active', '-', '-'),
]

export function CampaignsList () {
  const classes = useStyles()
  const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell/>
            <StyledTableCell align="left">Campaign</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">YouTube view</StyledTableCell>
            <StyledTableCell align="center">YouTube clicks</StyledTableCell>
            <StyledTableCell align="center">YouTube conversions</StyledTableCell>
            <StyledTableCell align="center">Instagram likes</StyledTableCell>
            <StyledTableCell align="left">Total adspend</StyledTableCell>
            <StyledTableCell align="right">
              Export <Link component={AdapterLink} to="#">(All)</Link>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.campaign}>
              <StyledTableCell component="th" scope="row">
                <IconButton aria-label="Settings">
                  <Settings fontSize="small" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Link component={AdapterLink} to="/brand/campaign">{row.campaign}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.yview}</StyledTableCell>
              <StyledTableCell align="center">{row.yclicks}</StyledTableCell>
              <StyledTableCell align="center">{row.yconversions}</StyledTableCell>
              <StyledTableCell align="center">{row.ilikes}</StyledTableCell>
              <StyledTableCell align="left">{row.total}</StyledTableCell>
              <StyledTableCell align="right">
                <SaveAlt color="disabled" fontSize="small" />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Tooltip
} from '@material-ui/core'
import {Help} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  help: {
    marginLeft: 10,
    fontSize: 15,
    position: 'relative',
    top: 2
  }
}))


export function AdvancedTab () {
  const classes = useStyles()

  return (
    <Box py={3}>
      <Typography variant="h6" gutterBottom>Instagram Stats</Typography> 
      <Table>
        <TableBody>
          <TableRow hover>
            <TableCell component="th" scope="row">
              Creator’s Requested Compensation
              <Tooltip title="Price on recent sponsorships or as set by the creator" placement="top">
                <Help className={classes.help} size="small" color="disabled" />
              </Tooltip>
            </TableCell>
            <TableCell>$100.00</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell component="th" scope="row">Average Likes</TableCell>
            <TableCell>0.7222222222222222</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell component="th" scope="row">Average Comments</TableCell>
            <TableCell>0.0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}

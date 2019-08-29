import React from 'react'
import {Table , Typography, TableBody, TableCell, TableRow} from '@material-ui/core'

function createData(name, num) {
  return { name, num }
}

const rows = [
  createData('Instagram Followers', 159),
  createData('Ice cream sandwich', 237),
  createData('Average Likes', 262),
  createData('Average Comments', 305),
  createData('Creator’s Requested Compensation', '$100'),
]

export default function InstagramInfo() {

  return (
    <React.Fragment>
      <Typography variant="subtitle1" gutterBottom>Instagram</Typography>
      <Table size="small">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="textSecondary">{row.name}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1">{row.num}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
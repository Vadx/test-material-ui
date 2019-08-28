import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableSortLabel,
  Link
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { UserInfo } from './UserInfo'

const useStyles = makeStyles(theme => ({
  tableWrapper: {
    position: 'fixed',
    top: '58px',
    width: '100%',
    height: 'calc(100% - 108px)',
    overflowY: 'auto',
    borderRadius: 0
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  avatar: {
    marginRight: 10,
    display: 'inline-flex',
    verticalAlign: 'inherit'
  },
  tableBody: {
    height: 'calc(100% - 58px)',
    overflowY: 'auto'
  }
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3c4656',
    color: '#fff',
    paddingTop: '18px',
    paddingBottom: '18px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    '& .MuiTableSortLabel-root.MuiTableSortLabel-active': {
      color: '#fff'
    },
    '& .MuiTableSortLabel-icon': {
      color: '#fff !important'
    },
    '& .MuiTableSortLabel-root:hover': {
      color: '#fff'
    }
  },
  body: {
    fontSize: 13,
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}))(TableCell)

function createData(name, rating, subscribers, estcost, followers, avgcost, avglikes, avgcomm, facebook, twitter) {
  return { name, rating, subscribers, estcost, followers, avgcost, avglikes, avgcomm, facebook, twitter};
}

const rows = [
  createData('User #0', 1, '303K', '$59.80', '$50K', '$50K', '3K', 3 ,5 ,6),
  createData('User #1', 2, '100K', '$109.20', '$8K', '$7K', '3K', 3 ,5 ,6),
  createData('User #2', 3, '200K', '$70.10', '$19K', '$51K', '3K', 3 ,5 ,6),
  createData('User #4', 5, '50K', '$70.10', '$7K', '$30K', '3K', 3 ,5 ,6),
  createData('User #5', 1, '303K', '$59.80', '$50K', '$50K', '3K', 3 ,5 ,6),
  createData('User #6', 2, '100K', '$109.20', '$8K', '$7K', '3K', 3 ,5 ,6),
  createData('User #7', 3, '200K', '$70.10', '$19K', '$51K', '3K', 3 ,5 ,6),
  createData('User #8', 5, '50K', '$70.10', '$7K', '$30K', '3K', 3 ,5 ,6),
  createData('User #9', 1, '303K', '$59.80', '$50K', '$50K', '3K', 3 ,5 ,6),
  createData('User #10', 2, '100K', '$109.20', '$8K', '$7K', '3K', 3 ,5 ,6),
  createData('User #11', 3, '200K', '$70.10', '$19K', '$51K', '3K', 3 ,5 ,6),
  createData('User #12', 5, '50K', '$70.10', '$7K', '$30K', '3K', 3 ,5 ,6),
  createData('User #13', 1, '303K', '$59.80', '$50K', '$50K', '3K', 3 ,5 ,6),
  createData('User #14', 2, '100K', '$109.20', '$8K', '$7K', '3K', 3 ,5 ,6),
  createData('User #15', 3, '200K', '$70.10', '$19K', '$51K', '3K', 3 ,5 ,6),
  createData('User #16', 5, '50K', '$70.10', '$7K', '$30K', '3K', 3 ,5 ,6),
]

// ------_Start
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'name', numeric: false, label: 'Influencer Name' },
  { id: 'rating', numeric: false, label: 'Rating' },
  { id: 'subscribers', numeric: false, label: 'YOUTUBE Subscribers' },
  { id: 'estcost', numeric: false, label: 'YOUTUBE Est.Cost'},
  { id: 'followers', numeric: false, label: 'INSTAGRAM followers'},
  { id: 'avgcost', numeric: false, label: 'INSTAGRAM Avg.Cost'},
  { id: 'avglikes', numeric: false, label: 'INSTAGRAM Avg. Likes'},
  { id: 'avgcomm', numeric: false, label: 'INSTAGRAM Avg. Comments'},
  { id: 'facebook', numeric: false, label: 'FACEBOOK Likes'},
  { id: 'twitter', numeric: false, label: 'TWITTER Followers'}
]

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <StyledTableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.sublabel}
              {row.label}
              {orderBy === row.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
}

export default function UsersList () {
  const classes = useStyles()

  // ----Start Sort
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }
  // -- End sort

  // User Info
  const [openUser, setOpenUser] = React.useState(false)
  function handleClickOpenUser() {
    setOpenUser(true)
  }
  const handleCloseUser = value => {
    setOpenUser(false)
  }

  return (
    <React.Fragment>
      <Paper className={classes.tableWrapper}>
        <Table size="small">
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
          />
            <TableBody className={classes.tableBody}>
              {stableSort(rows, getSorting(order, orderBy))
                .map(row => {
                    return (
                        <TableRow
                          tabIndex={-1}
                          key={row.name}
                        > 
                          <StyledTableCell align="left" style={{width: 240}}>
                            <Avatar alt="Remy Sharp" className={classes.avatar} />
                            <Link onClick={handleClickOpenUser}>{row.name}</Link>
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Rating value={row.rating} readOnly size="small" />
                          </StyledTableCell>
                          <StyledTableCell align="left">{row.subscribers}</StyledTableCell>
                          <StyledTableCell align="left">{row.estcost}</StyledTableCell>
                          <StyledTableCell align="left">{row.followers}</StyledTableCell>
                          <StyledTableCell align="left">{row.avgcost}</StyledTableCell>
                          <StyledTableCell align="left">{row.avglikes}</StyledTableCell>
                          <StyledTableCell align="left">{row.avgcomm}</StyledTableCell>
                          <StyledTableCell align="left">{row.facebook}</StyledTableCell>
                          <StyledTableCell align="left">{row.twitter}</StyledTableCell>
                        </TableRow>
                  )
              })}
            </TableBody>
        </Table>
      </Paper>
      <UserInfo open={openUser} onClose={handleCloseUser} />
    </React.Fragment>
  )
}
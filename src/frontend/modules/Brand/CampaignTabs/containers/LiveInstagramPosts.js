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
  IconButton,
  Link,
  Typography
} from '@material-ui/core'
import {People, ChatBubble} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(3)
  },
  tableWrapper: {
    overflowX: 'auto',
    marginBottom: theme.spacing(3)
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
  }
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 13,
  }
}))(TableCell)

function createData(name, type, posted, adspend, likes, comments) {
  return { name, type, posted, adspend, likes, comments};
}

const rows = [
  createData('User #0', 'image', '24 days ago', '$59.80', 10, 20 ),
  createData('User #1', 'image', '14 days ago', '$109.20', 22, 100),
  createData('User #2', 'image', '2 days ago', '$70.10', 9, 7),
  createData('User #4', 'image', '1 days ago', '$70.10', 2, 2),
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
  { id: 'name', numeric: false, label: 'Creator' },
  { id: 'type', numeric: false, label: 'Type' },
  { id: 'posted', numeric: false, label: 'Posted' },
  { id: 'adspend', numeric: false, label: 'Adspend'},
  { id: 'likes', numeric: false, label: 'Likes'},
  { id: 'comments', numeric: false, label: 'Comments'}
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
              {row.label}
              {orderBy === row.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
        <StyledTableCell align="center" style={{width: '120px'}}>Manage</StyledTableCell>
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

export function LiveInstagramPosts () {
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
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography component="h6" variant="subtitle1" gutterBottom>9 likes have been delivered for this campaign</Typography>
      </Paper>
      <Paper className={classes.tableWrapper}>
        <Table>
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getSorting(order, orderBy))
              .map(row => {
                  return (
                      <TableRow
                        tabIndex={-1}
                        key={row.name}
                      > 
                        <StyledTableCell align="left">
                          <Avatar alt="Remy Sharp" className={classes.avatar} />
                          <Link>{row.name}</Link>
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.type}</StyledTableCell>
                        <StyledTableCell align="left">{row.posted} | <Link>view</Link></StyledTableCell>
                        <StyledTableCell align="left">{row.adspend}</StyledTableCell>
                        <StyledTableCell align="left">{row.likes}</StyledTableCell>
                        <StyledTableCell align="left">{row.comments}</StyledTableCell>
                        <StyledTableCell align="center" style={{width: '120px'}}>
                          <IconButton aria-label="users">
                            <People color="disabled" fontSize="small" />
                          </IconButton>
                          <IconButton aria-label="Chat">
                            <ChatBubble color="disabled" fontSize="small" />
                          </IconButton>
                        </StyledTableCell>
                      </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  )
}

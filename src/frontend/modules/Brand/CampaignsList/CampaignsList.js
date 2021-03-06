import React from 'react'
import PropTypes from 'prop-types'
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
  TableCell,
  TableSortLabel,
  Typography,
  Button
} from '@material-ui/core'

import {Settings, SaveAlt, Search} from '@material-ui/icons'
import {TopBar} from './containers/TopBar'
import {ManageCampaign} from './containers/ManageCampaign'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 2)
  },
  tableWrapper: {
    overflowX: 'auto',
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
  settingsBtn: {
    marginLeft: '5px'
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 3
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

const PreviewBtn = withStyles(theme => ({
  root: {
    fontSize: '11px',
    textTransform: 'none',
    padding: '2px 5px'
  }
}))(Button)

function createData(name, status, statusdate, yview, yclicks, yconversions, ilikes, total) {
  return { name, status, statusdate, yview, yclicks, yconversions, ilikes, total};
}

const rows = [
  createData('Campaign #0', 'active', 'Since 2019-07-25', 100, 20, 'active', 1000, 1000),
  createData('Campaign #1', 'active', 'Since 2019-07-27' ,20, 21, 'active', 500, 1200),
  createData('Campaign #2', 'active', 'Since 2019-07-29' ,233, 12, 'active', 601, 300),
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
  { id: 'name', numeric: false, label: 'Campaign' },
  { id: 'statusdate', numeric: false, label: 'Status' },
  { id: 'yview', numeric: false, label: 'YouTube view' },
  { id: 'yclicks', numeric: false, label: 'YouTube clicks' },
  { id: 'yconversions', numeric: false, label: 'YouTube conversions' },
  { id: 'ilikes', numeric: false, label: 'Instagram likes' },
  { id: 'total', numeric: false, label: 'Total adspend' },
]

function EnhancedTableHead(props) {
  const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="none"/>
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
        <StyledTableCell align="right">
          Export <Link component={AdapterLink} to="#">(All)</Link>
        </StyledTableCell>
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

export function CampaignsList () {
  const classes = useStyles()
  const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)
  const AdapterButton = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

  // ----Start Sort
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }
  // -- End sort

  // Dialog Settings
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <TopBar/>
      <Paper className={classes.root}>
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
                        <StyledTableCell component="th" scope="row" padding="none">
                          <IconButton 
                            className={classes.settingsBtn} 
                            aria-label="Settings"
                            onClick={handleClickOpen}
                            >
                            <Settings fontSize="small" />
                          </IconButton>
                          
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Link component={AdapterLink} to="/brand/campaign">{row.name}</Link>
                          <PreviewBtn component={AdapterButton} to="/brand/preview">
                            <Search fontSize="small" className={classes.searchIcon} />
                            Campaign Preview
                          </PreviewBtn>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.status}
                          <Typography variant="caption" color="textSecondary" display="block">{row.statusdate}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.yview}</StyledTableCell>
                        <StyledTableCell align="left">{row.yclicks}</StyledTableCell>
                        <StyledTableCell align="left"><Link>{row.yconversions}</Link></StyledTableCell>
                        <StyledTableCell align="left">{row.ilikes}</StyledTableCell>
                        <StyledTableCell align="left">{row.total}</StyledTableCell>
                        <StyledTableCell align="right">
                          <IconButton aria-label="Settings">
                            <SaveAlt color="disabled" fontSize="small" />
                          </IconButton>
                        </StyledTableCell>
                      </TableRow>
                )
            })}
          </TableBody>
        </Table>
        <ManageCampaign open={open} onClose={handleClose} />
      </Paper>
    </React.Fragment>
  )
}
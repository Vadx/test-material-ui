import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid, 
  Paper, 
  Typography, 
  Link, 
  Avatar, 
  Button, 
  Box,
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { deepOrange } from '@material-ui/core/colors'
import {ArrowRightAlt, ArrowBack, ChatBubbleOutline} from '@material-ui/icons'
import SelectCard from '../../../../common/SelectCard'
import TableTotalCost from '../../../../common/TableTotalCost'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  cardWrap: {
    padding: 20,
  },
  orangeAvatar: {
    marginRight: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  iconArrow: {
    verticalAlign: 'middle',
    fontSize: '1rem'
  },
  extendedIcon: {
    marginRight: 5,
  },
  topInfo: {
    background: '#eee'
  },
  tableWrap: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3),
    background: '#eee'
  },
  table: {
    minWidth: 300
  },
  borderCol: {
    border: 0,
    padding: '2px 5px'
  }
}))

function createData(name, cost, due) {
  return { name, cost, due }
}

const rows = [
  createData('Youtube Video', '$50.00', '07/18/2019')
]

function TablePerformance(props){
  const { classes } = props
  return (
    <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.borderCol} align="left">Deliverable</TableCell>
            <TableCell className={classes.borderCol} align="center">Cost</TableCell>
            <TableCell className={classes.borderCol} align="right">Due By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell className={classes.borderCol} align="left"><Typography variant="caption">{row.name}</Typography></TableCell>
              <TableCell className={classes.borderCol} align="center"><Typography variant="caption">{row.cost}</Typography></TableCell>
              <TableCell className={classes.borderCol} align="right"><Typography variant="caption">{row.due}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
  )
}

TablePerformance.propTypes = {
  classes: PropTypes.object.isRequired
}

export function Proposals () {
  const classes = useStyles()
  const [show, setShow] = React.useState(true)
  function handleClick() {
    setShow(!show)
  }

  return (
    <Grid container spacing={3}>
      {show ? (
          <Grid item xs={4}>
            <Paper className={classes.cardWrap}>
              <Grid container style={{ marginBottom: '20px' }}>
                <Grid item xs={2}>
                  <Avatar className={classes.orangeAvatar}>H</Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography><Link>User Name</Link></Typography>
                  <Typography variant="caption">
                    <Link>See audience stats <ArrowRightAlt className={classes.iconArrow} /></Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Rating style={{justifyContent: 'flex-end'}} name="size-small" value={4} size="small" readOnly />
                </Grid>
              </Grid>

              <Typography variant="body2" color="textSecondary" style={{fontStyle: 'italic', marginBottom: '30px'}}>
                "Text Text Text TextText TextTextText  Text Text Text TextTextText  TextText Text TextText  Text Text Text Text Text Text Text"
              </Typography>

              <Box className={classes.tableWrap}>
                <TablePerformance classes={classes} />
                <Box textAlign="right" fontFamily="fontFamily" fontSize={12} p={1}>
                  <Link>Edit invite</Link>
                </Box>
              </Box>

              <Box mb={4}>
                <Typography variant="button" color="textSecondary">Grapevine analysis</Typography>  
              </Box>
              
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box flexGrow={1}>
                  <Button style={{width: '100%'}} variant="contained" color="primary" onClick={handleClick}>Book now - 7 Days left</Button>
                </Box>
                <Box>
                  <Button style={{marginLeft: '20px'}}>
                    <ChatBubbleOutline className={classes.extendedIcon} fontSize='small' /> Chat
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ) : (
          <Grid item xs={4}>
            <Paper className={classes.cardWrap}>
              <Box className={classes.topInfo} textAlign="center" p={2} mb={3}>
                <Typography variant="subtitle2">Review and finalize booking</Typography>
              </Box>

              <Box mb={3}>
                <TableTotalCost />
              </Box>

              <Box mb={3}>
                <SelectCard />
              </Box>

              <Box mb={2} display='flex' justifyContent='space-between' alignItems='center'>
                <Box flexGrow={1}>
                  <Button style={{width: '100%'}} variant="contained" color="secondary">Confirm for $65.00</Button>
                </Box>
                <Box>
                  <Button style={{marginLeft: '20px'}} onClick={handleClick}>
                    <ArrowBack className={classes.extendedIcon} fontSize='small' /> Back
                  </Button>
                </Box>
              </Box>
              <Typography variant="caption" color="textSecondary" component="div" style={{textAlign: 'center'}}>Your credit card or accounts credits wil be used</Typography>
            </Paper>
          </Grid>
        )
      }
    </Grid>
  )
}

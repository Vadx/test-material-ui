import React from 'react'
import { makeStyles, withStyles, fade } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  Box,
  InputBase,
  Popper,
  Fade,
  MenuList,
  MenuItem,
  Typography
} from '@material-ui/core'
import { Help, Search } from '@material-ui/icons'
import { Filter } from './Filter'

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#fafafa',
    borderTop: '1px solid #ccc',
    borderRadius: 0
  },
  leftBox: {
    borderRight: '1px solid #ccc',
  },
  search: {
    position: 'relative',
    top: 2,
    borderRadius: 20,
    backgroundColor: fade(theme.palette.common.white, 1),
    border: '1px solid #ccc',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(0, 2, 0, 2),
    width: '280px',
    height: '34px'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(0, 1, 0, 7),
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: 200,
    // },
  },
  count: {
    background: '#ccc',
    color: '#fff',
    padding: '0px 6px',
    borderRadius: '7px',
    marginLeft: 20
  },
  iconHelp: {
    marginLeft: 20
  }
}))

const StyledButton = withStyles(theme => ({
  root: {
    height: '100%',
    borderRadius: 0,
    paddingLeft: 25,
    paddingRight: 25,
    borderLeft: '1px solid #ccc',
  }
}))(Button)


export default function FooterDiscover () {
  const classes = useStyles()

  // Filter
  const [open, setOpenFilter] = React.useState(false);
  function handleClickOpenFilter() {
    setOpenFilter(true)
  }
  const handleCloseFilter = value => {
    setOpenFilter(false)
  }

  //Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClickSegment(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const openPopover = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined

  return (
    <React.Fragment>
      <Paper className={classes.wrapper}>
        <Box display="flex" justifyContent="space-between" alignItems="stretch" height="100%">
          <Box className={classes.leftBox}>
            <Box className={classes.search} display="inline-flex">
              <div className={classes.searchIcon}><Search color="disabled" /></div>
              <InputBase
                placeholder="Search…"
                className={classes.inputInput}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
            <StyledButton aria-describedby={id} onClick={handleClickSegment}>Segments</StyledButton>
            <Popper id={id} open={openPopover} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <MenuList>
                      <MenuItem>How it works {'  '}<Help className={classes.iconHelp} fontSize="small" color="disabled" /></MenuItem>
                      <MenuItem>Favorites <Typography className={classes.count} variant="caption">0</Typography></MenuItem>
                    </MenuList>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </Box>
          <Box>
            <StyledButton onClick={handleClickOpenFilter}>Filters</StyledButton>
            <StyledButton>Reset</StyledButton>
            <StyledButton><Help fontSize="small" color="disabled" /></StyledButton>
          </Box>
        </Box>
      </Paper>
      <Filter open={open} onClose={handleCloseFilter} />
    </React.Fragment>
  )
}

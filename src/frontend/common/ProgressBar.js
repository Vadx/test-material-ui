import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  wrap: {
    background: '#fafafa',
    padding: '20px',
    marginBottom: '20px'
  },
  progressLine: {
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    height: '10px',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)',
    marginRight: '10px',
    position: 'relative',
    top: -'1px'
  }
})


export function ProgressBar() {
  const classes = useStyles()
  return (
    <Box className={classes.wrap}>
      <Typography variant='button' display='block'>Campaign Progress:</Typography> 
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box flexGrow={1}>
          <Box className={classes.progressLine}>
            <Box width='33%' p={0} my={0} style={{ background: '#3baaa6', height: '10px' }}></Box> 
          </Box>
        </Box>
        <Box>
          <Typography variant='subtitle2' gutterBottom>33%</Typography>
        </Box>
      </Box>
    </Box>
  )
}

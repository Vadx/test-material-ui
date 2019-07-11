import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../../common/ProgressBar'
import { StatusList } from '../../common/StatusList'
import {Grid, Paper, Typography, Avatar, Button, Link, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Star from '@material-ui/icons/Star'

const Wrap = styled.div`
  margin-bottom: 25px;
  padding: 0 20px;
`

const useStyles = makeStyles({
  orangeAvatar: {
    marginRight: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  extendedIcon: {
    marginRight: 5,
  },
  cardWrap: {
    padding: 20,
  }
})

export function CompaignsCard () {
  const classes = useStyles()
  return (
      <Wrap>
        <Grid 
          container  
          spacing={0}
          alignContent="space-between">
          <Grid container xs={12} sm={3}>
            <Paper className={classes.cardWrap}>
              <Grid spacing={0} container style={{ marginBottom: '20px' }}>
                <Grid xs={2}>
                  <Avatar className={classes.orangeAvatar}>H</Avatar>
                </Grid>
                <Grid xs={6}><Link><Typography>User Name</Typography></Link></Grid>
                <Grid xs={4} alignSelf="flex-end">
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                </Grid>
              </Grid>

              <ProgressBar />

              <StatusList />
              
              <Typography variant="subtitle2" gutterBottom>Grapevine Tip:</Typography>
              <Typography variant="caption" display="block" style={{ marginBottom: '30px' }}>Check in with viktoriia-naughton about 5 days before your content goes live to make sure things are on schedule.</Typography>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box flexGrow={1}>
                  <Button style={{width: '100%'}} boxShadow={0} variant="contained" color="primary">Waiting for video</Button>
                </Box>
                <Box>
                  <Button style={{marginLeft: '20px'}}>
                    <ChatBubbleOutline className={classes.extendedIcon} fontSize='small' /> Chat
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Wrap>
  )
}

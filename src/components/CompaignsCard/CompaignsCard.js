import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../../common/ProgressBar'
import {Grid, Paper, Typography, Avatar, Button, Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Star from '@material-ui/icons/Star'


const Wrap = styled.div`
  margin-bottom: 25px;
  padding: 0 20px;
`

const CardWrap = styled(Paper)`
  padding: 20px;
`

const useStyles = makeStyles({
  orangeAvatar: {
    marginRight: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
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
          <Grid container xs={4}>
            <CardWrap>
              <Grid spacing={0} container style={{ marginBottom: '20px' }}>
                <Grid xs={2}>
                  <Avatar className={classes.orangeAvatar}>H</Avatar>
                </Grid>
                <Grid xs={6}><Link>User Name</Link></Grid>
                <Grid xs={4}>
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                  <Star fontSize='small' style={{ color: '#E7AF00' }} />
                </Grid>
              </Grid>

              <ProgressBar />
              
              <Typography variant="subtitle2" gutterBottom>Grapevine Tip:</Typography>
              <Typography variant="caption" display="block" style={{ marginBottom: '30px' }}>Check in with viktoriia-naughton about 5 days before your content goes live to make sure things are on schedule.</Typography>
              <Button boxShadow={0} variant="contained" color="primary">Waiting for video</Button>
              <Button>
                <ChatBubbleOutline fontSize='small' />
                Chat
              </Button>
            </CardWrap>
          </Grid>
          
        </Grid>
      </Wrap>
  )
}

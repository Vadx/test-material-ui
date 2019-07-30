import React from 'react'
import { ProgressBar } from '../../../../common/ProgressBar'
import { StatusList } from '../../../../common/StatusList'
import { Grid, Paper, Typography, Avatar, Button, Link, Box} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'

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

export function CampaignInProgress () {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.cardWrap}>
              <Grid container style={{ marginBottom: '20px' }}>
                <Grid item xs={2}>
                  <Avatar className={classes.orangeAvatar}>H</Avatar>
                </Grid>
                <Grid item xs={6}><Link><Typography>User Name</Typography></Link></Grid>
                <Grid item xs={4}>
                  <Rating name="size-small" value={4} size="small" readOnly />
                </Grid>
              </Grid>

              <ProgressBar />

              <StatusList />
              
              <Typography variant="subtitle2" gutterBottom>Grapevine Tip:</Typography>
              <Typography variant="caption" display="block" style={{ marginBottom: '30px' }}>Check in with viktoriia-naughton about 5 days before your content goes live to make sure things are on schedule.</Typography>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box flexGrow={1}>
                  <Button style={{width: '100%'}} variant="contained" color="primary">Waiting for video</Button>
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
  )
}

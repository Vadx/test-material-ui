import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Typography, 
  Box, 
  Grid, 
  Link, 
  Avatar, 
  Button, 
  Tooltip
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  alignRigth: {
    textAlign: 'right'
  },
  styleAvatar: {
    backgroundColor: deepOrange[500],
    margin: '0 auto 10px',
    width: 60,
    height: 60,
  },
  grayBox: {
    padding: theme.spacing(2, 2),
    background: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius: '2px',
    margin: '20px 0',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)'
  }
}))

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    padding: theme.spacing(2, 2)
  },
}))(Tooltip)

export function RightBar () {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box>
        <Avatar className={classes.styleAvatar}>H</Avatar>
      </Box>
      <Box fontFamily="fontFamily" mb={1} fontSize={20} textAlign="center"><Link>User Name</Link></Box>
      <Box fontFamily="fontFamily" mb={2} color="text.secondary" fontSize={13} textAlign="center">Average response time: More than a week</Box>
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">Campaign</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="span">
            <Link>Ig subscribers creation</Link>
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">Video Type</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="span">Haul</Typography>
        </Grid>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">YouTube Subscribers</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="span">20,066+</Typography>
        </Grid>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">Instagram Followers</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="span">58+</Typography>
        </Grid>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">Budget per Creator</Typography>
        </Grid>
        <Grid item xs={6}>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit" variant="button" gutterBottom>Budget Estimate</Typography>
                <Typography color="inherit" variant="caption" component="p" gutterBottom>Every campaign has a budget that is split up between different creators.</Typography>
                <Typography color="inherit" variant="caption" component="p">Campaigns with larger budgets may be able to pay out more, but usually have more competition. Send a proposal and find out!</Typography>
                
              </React.Fragment>
            }
          >
            <Typography variant="body2" component="span" color="error">$$$$</Typography>
          </HtmlTooltip>
        </Grid>
        <Grid item xs={6} className={classes.alignRigth}>
          <Typography variant="subtitle2" component="span">Category</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="span">Beauty & Fashion</Typography>
        </Grid>
      </Grid>

      <Box className={classes.grayBox}>
        <Box fontFamily="fontFamily" mb={2} color="text.secondary" fontSize={13}>Average response time: More than a week</Box>
        <Typography variant="caption" component="ul">
            <li>Submit your content to Grapevine for final approval</li>
            <li>Post your content on your primary channel unless directed otherwise</li>
            <li>Speak about products within the first minute of your video, if creating a video</li>
            <li>Ensure the tracking link is active and in the first line of description, if creating a video</li>
            <li>Comply with <Link to="https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking" target="_blank">FTC guidelines</Link> by stating in your content and in its description that the video or post is sponsored.</li>
        </Typography>
      </Box>
      <Button fullWidth color="primary" variant="contained">Apply to Campaign</Button>
    </React.Fragment>
  )
}

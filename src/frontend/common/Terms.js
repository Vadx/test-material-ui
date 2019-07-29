import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Paper,
  Link,
  Grid
} from '@material-ui/core'

import tracking_link from '../assets/tracking_link.png'
import disclaimer from '../assets/disclaimer.png'
import message_center from '../assets/message_center.png'
import unlisted from '../assets/unlisted.png'
import submit_to_ig from '../assets/submit_to_ig.png'
import review from '../assets/review.png'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 3),
    maxWidth: 1200,
    margin: '50px 20px'
  },
  img: {
    maxWidth: '100%',
    border: '1px solid #fcfcfc',
    boxShadow: '0 1px 3px 0 #dbdbdb',
    marginBottom: '50px'
  }
}))


export function Terms () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box textAlign="center" mb={10}>
        <Typography component="h1" variant="h4" style={{marginBottom: '30px'}}>Grapevine Community Guidelines</Typography>
        <Typography component="p" color="textSecondary" style={{marginBottom: '30px'}}>Thank you for being a part of the Grapevine network! To get the most out of your experience we have identified some guidelines that all partners must follow. Please review and agree to these important community guidelines before accessing the platform.</Typography>
        <Typography component="p" color="textSecondary">We’ve also compiled a list of <Link>frequently asked questions</Link> from creators that are getting the hang of Grapevine.</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>1. For YouTube creators: include the provided tracking link</Typography>
          <Typography variant="body2">If you are making YouTube content you will be issued a custom Bitly link for each sponsorship. This link must be included in the top of your video description. This link works with the Grapevine product, so you MUST be sure to get this in your description in order to have content approved.</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={tracking_link} alt="Logo" />
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>2. Always add an FTC disclaimer</Typography>
          <Typography variant="body2">All sponsored content must have an FTC disclaimer. It is the law. For YouTube creators please include a sponsorship disclosure in your video description. A verbal disclosure is also encouraged. For Instagram posts you must include either #ad or #sponsored in your description.</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={disclaimer} alt="Logo" />
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>3. Use the message center</Typography>
          <Typography variant="body2">Working within our platform is the only way we can guarantee payment for you! Use the message center to collaborate with brands and negotiate your fee and upload date. Your shipping information is provided to the brand once you are approved. Don’t provide it beforehand. Communication outside of Grapevine is against our terms of service.</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={message_center} alt="Logo" />
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>4. Share your content ahead of time with the brand</Typography>
          <Typography variant="body2">Share your video unlisted or send a draft of your Instagram post with brands and let them know when it’s going live. 90% of the time they’ll give it a thumbs up. If something is wrong, it’s good to catch it early and make small changes.</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={unlisted} alt="Logo" />
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>5. Always submit your content!</Typography>
          <Typography variant="body2">Brands are notified immediately when you submit your content in Grapevine! You can submit content on the right side of the message center. The longer you wait to submit, the longer it takes to get approved and get you paid!</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={submit_to_ig} alt="Logo" />
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" gutterBottom>6. Earn great reviews!</Typography>
          <Typography variant="body2">At the end of each campaign the brand will have a chance to submit a review. Reviews are a powerful way to get rank higher in our search tool for brands, get accepted to more campaigns, and even command a higher price! The better job you do, the higher your reviews will be!</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img} src={review} alt="Logo" />
        </Grid>

      </Grid>
    </Paper>
  )
}

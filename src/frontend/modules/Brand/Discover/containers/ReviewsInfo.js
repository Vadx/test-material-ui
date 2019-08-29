import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Typography,
  Grid,
  Link,
  Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    overflowY: 'auto',
    maxHeight: '220px'
  },
  wrap: {
    marginBottom: '30px'
  },
  leftBox: {
    padding: theme.spacing(2, 2),
    marginLeft: theme.spacing(2),
    background: '#f9f8f8',
    border: '1px solid #eee',
    flex: '1 0 0'
  },
  table: {
    borderTop: '1px solid #eee',
  },
  margin: {
    marginBottom: '20px'
  }
}))

export default function ReviewsInfo() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid className={classes.wrap} container justify="space-between">
        <Grid item>
          <img src="https://via.placeholder.com/140x100" alt="youtube" />
        </Grid>
        <Grid item className={classes.leftBox}>
          <Link variant="button">Yout most beautiful tou | #1</Link>
          <Typography variant="body2" component="div" gutterBottom> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography variant="subtitle2" component="div" className={classes.margin}> It cosmetisc*</Typography>

          <Grid container spacing={2} className={classes.table}>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="body2">RELIABILITY</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={4} readOnly size="small" />
            </Grid>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="body2">COMMUNICATION</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={4} readOnly size="small" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.wrap} container justify="space-between">
        <Grid item>
          <img src="https://via.placeholder.com/140x100" alt="youtube" />
        </Grid>
        <Grid item className={classes.leftBox}>
          <Link variant="button">Yout most beautiful tou | #1</Link>
          <Typography variant="body2" component="div" gutterBottom> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <Typography variant="subtitle2" component="div" className={classes.margin}> It cosmetisc*</Typography>

          <Grid container spacing={2} className={classes.table}>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="body2">RELIABILITY</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={4} readOnly size="small" />
            </Grid>
            <Grid item xs={6}>
              <Typography color="textSecondary" variant="body2">COMMUNICATION</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={4} readOnly size="small" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
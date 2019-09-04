import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
  Box,
  Typography,
  Grid
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const data = [
  {
    src:
      'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    likes: '12K likes',
    views: '396M views',
    ctr: '0.99% ctr',
  },
  {
    src:
      'https://i.ytimg.com/vi/ycHr1G0Gffg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAS6ZJ5RYa2R3Ksp9d8cLzY_8DMOA',
    title: 'Top Latino Songs 2019 - Luis Fonsi, Ozuna, Nicky Jam…',
    likes: '8K likes',
    views: '2.1M views',
    ctr: '0.80% ctr',
  },
  {
    src:
      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    likes: '20K likes',
    views: '130M views',
    ctr: '1.2% ctr',
  },
]

function Media(props) {
  const { loading = false } = props

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box paddingRight={2}>
              <Typography gutterBottom variant="body2">{item.title}</Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.likes} • ${item.views}`}
              </Typography>
              <Typography gutterBottom variant="caption" color="textSecondary" component="div">{item.ctr}</Typography>
            </Box>
          ) : (
            <React.Fragment>
              <Skeleton />
              <Skeleton width="60%" />
            </React.Fragment>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
}

function AddVideo() {
  return (
    <Box textAlign="center"  width={210} height={210} p={2}>
      <Typography variant="subtitle2">Add a new Video</Typography>
      <Typography variant="caption" color="textSecondary">Build out your portfolio by adding the content you're most proud of</Typography>
    </Box>
  )
}

export function YouTubeTab() {
  return (
    <React.Fragment>
      <Box overflow="hidden" clone>
        <Box px={5}>
          <Media loading />
          <Media />
        </Box>
      </Box>
      <AddVideo />
    </React.Fragment>
    
  );
}
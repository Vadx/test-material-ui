import React from 'react'
import { Route } from 'react-router-dom'
import {
  Box,
  Typography,
  Grid,
  Fab
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

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
  {
    src:
      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    likes: '20K likes',
    views: '130M views',
    ctr: '1.2% ctr',
  },
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
]

function AddVideo() {
  return (
    <Box 
      style={{border: '3px dashed #ccc'}}
      textAlign="center"
      width={210}
      p={2}
    >
      <Typography variant="subtitle1" gutterBottom>Add a new Video</Typography>
      <Typography variant="caption" color="textSecondary" component="div" gutterBottom>Build out your portfolio by adding the content you're most proud of</Typography>
      <Fab size="medium" color="primary">
        <Add fontSize="large" />
      </Fab>
    </Box>
  )
}

export function YouTubeTab() {
  return (
    <Box py={3}>
      <Grid container justify="space-between" spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item>
              <Box width={210} mb={3}>
                <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
                <Typography gutterBottom variant="body2">{item.title}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {`${item.likes} • ${item.views}`}
                </Typography>
                <Typography gutterBottom variant="caption" color="textSecondary" component="div">{item.ctr}</Typography>
              </Box>
          </Grid>
        ))}
      </Grid>
      <Route path={['/creator']} component={AddVideo} />
    </Box>
  )
}
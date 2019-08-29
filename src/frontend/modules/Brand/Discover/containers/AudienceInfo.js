import React from 'react'
import { Typography, Button, Box } from '@material-ui/core'

export default function AudienceInfo() {
  return (
    <React.Fragment>
      <Typography variant="subtitle1" align="center" gutterBottom>View Audience Stats</Typography>
      <Typography variant="body2" align="center" gutterBottom> YouTube requires creators to give explicit permission to brands before we can show you their audience data including age, gender, and where their audience lives.</Typography>
      <Box p={3} textAlign="center">
        <Button variant="contained">Request Demographics Info</Button>  
      </Box>
    </React.Fragment>
  )
}
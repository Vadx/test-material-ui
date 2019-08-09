import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography, 
  Box, 
  Link, 
  TextField, 
  Tooltip, 
  Button
} from '@material-ui/core'
import Help from '@material-ui/icons/Help'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'
import SelectCategories from './SelectCategories'

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fafafa'
  },
  headline: {
    background: '#eee',
    borderBottom: '1px dashed #bbb',
    padding: theme.spacing(1, 2),
  },
  content: {
    padding: theme.spacing(2, 2)
  },
  icon: {
    fontSize: '14px',
    marginLeft: '5px'
  },
  input: {
    '& .MuiOutlinedInput-inputMarginDense': {
      background: '#fff'
    }
  },
  ageButton: {
    width: '70px'
  },
  grayBox: {
    background: '#f3f3f3',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1em'
  }
}))

export function RightForm () {
  const classes = useStyles()
  
  const [age, setAge] = React.useState('none')

  const handleAge = (event, newAge) => {
    setAge(newAge)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.headline} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="button" component="h6">Campaign Details</Typography>
        <Link><Typography variant="caption">Read more: Writing a killer campaign brief</Typography></Link>
      </Box>
      <Box className={classes.content}>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2">Campaign Description</Typography>
          <Tooltip title="This is visible when creators apply to campaigns. Try to write 3-5 descriptive sentences about what your campaign is, what your goals are, and anything else the creators should know before they apply. The goal is to get the creator excited and interested in your brand. Quality descriptions = quality proposals!" placement="right-start">
            <Help className={classes.icon} color="primary" />
          </Tooltip>
        </Box>
        <TextField
          fullWidth
          multiline
          rows="4"
          margin="dense"
          variant="outlined"
          placeholder="A few descriptive sentences about what your campaign is, what your goals are, and anything else the creators should know before they apply."
          style={{marginBottom: '25px'}}
        />

        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2">Instructions and Content Requirements</Typography>
          <Tooltip title="What should the creators make sure to do in their content? This is where you should include specific content instructions for all creators. You can work directly with creators for even more specific instructions, however, all major talking points should appear here." placement="right-start">
            <Help className={classes.icon} color="primary" />
          </Tooltip>
        </Box>
        <TextField
          fullWidth
          multiline
          rows="4"
          margin="dense"
          variant="outlined"
          placeholder="What should the creators make sure to do in their content? This is where you should include specific content instructions and talking points.."
          style={{marginBottom: '25px'}}
        />

        <Box className={classes.grayBox} mb={2}>
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle2">Landing Page Destination Url</Typography>
            <Tooltip title="What is the goal page for your campaign? This would typically be your product page or company site. Be sure to include the Grapevine Tracking Snippet on your site so conversions are properly tracked." placement="right-start">
              <Help className={classes.icon} color="primary" />
            </Tooltip>
          </Box>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            className={classes.input}
            placeholder="e.g. http://www.example.com?utm_source=grapevine"
          />
          <Typography component="div" variant="body2" style={{marginBottom: '20px'}}>
            <Link>Using Google Analytics?</Link>
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography variant="subtitle2">Campaign Cover Image (recommended 400x600 pixels)</Typography>
            <Tooltip title="This is the image that appears next to your campaign description. This can be an image of your product, a screenshot of your website, or something that is relevant to your campaign. We recommend a maximum image width of 600px. JPG or PNG files up to 500kb are accepted." placement="right-start">
              <Help className={classes.icon} color="primary" />
            </Tooltip>
          </Box>
          <Box p={1} mb={3}>
            <Button
              variant="contained"
              component="label"
              size="small"
              >
              Upload File
              <input
                type="file"
                style={{ display: "none" }}
              />
            </Button>
          </Box>

          <Box mb={3}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle2">Content Categories</Typography>
                <Tooltip title="Try to find existing categories that are relevant to yourcampaign. These help find creators that have influence in a particular topic." placement="right-start">
                  <Typography variant="caption" color="textSecondary">max 3</Typography>
                </Tooltip>
            </Box>
            <SelectCategories />
          </Box>

          <Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle2">Age Restrictions</Typography>
              <Tooltip title="This relates to the age of the creator. Consider using this if you are shipping an age restricted item, or only want to work with creators older than a certain age." placement="right-start">
                <Help className={classes.icon} color="primary" />
              </Tooltip>
            </Box>
            <ToggleButtonGroup value={age} exclusive onChange={handleAge}>
              <ToggleButton className={classes.ageButton} value="none">None</ToggleButton>
              <ToggleButton className={classes.ageButton} value="18+">18+</ToggleButton>
              <ToggleButton className={classes.ageButton} value="21+">21+</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <Button variant="contained" color="primary" fullWidth>Submit Campaign</Button>
      </Box>
    </Box>
  )
}

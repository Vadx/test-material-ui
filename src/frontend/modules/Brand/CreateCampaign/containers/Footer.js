import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Box, 
  Typography, 
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background: '#303845'
  },
  innerWrap: {
    maxWidth: '980px',
    margin: 'auto',
    color: '#fff'
  }
}))

const StyledExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    background: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(ExpansionPanel)

const StyledPanelSummary = withStyles({
  root: {
    backgroundColor: 'none',
    borderBottom: 'none',
    marginBottom: 0,
    minHeight: 36,
    padding: 0,
    color: '#999',
    '&$expanded': {
      minHeight: 36,
      color: '#fff',
    },
    '& :hover': {
      color: '#ccc',
    },
  },
  content: {
    '&$expanded': {
      margin: '5px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary)

const PanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
    color: '#fff'
  },
}))(ExpansionPanelDetails)

export function Footer () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.innerWrap}>
        <Box fontFamily="fontFamily" fontSize="14" color="#6f7e8b" mb={2}>Campaign Creation Tips</Box>

        <StyledExpansionPanel>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What makes a good campaign brief?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">Creators will do their best to follow the guidelines that you set here for content and creative. Consider if your campaign requires things like mentions of your brand, or showing screenshots of your website. You always have an opportunity to work with individual creators on their videos, but the instructions are a great place to start.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>
        
        <StyledExpansionPanel>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Expansion Panel 2</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <Typography variant="h6" component="h4" gutterBottom>Have any more questions?</Typography>
        <Typography variant="body2" component="p" gutterBottom>Feel free to e-mail us at <Link>pro@grapevinelogic.com</Link>, or start a chat dialog by clicking the floating green icon at the bottom-right corner of this page.</Typography>
        <Typography variant="body2" component="p">We love feedback of all kinds! What do you love about this page? What do you think could be improved? Let us know at <Link>ro@grapevinelogic.com</Link>.</Typography>
      </Box>
      
    </Box>
  )
}

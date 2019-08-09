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
    padding: theme.spacing(5, 2),
    background: '#303845'
  },
  innerWrap: {
    maxWidth: '1024px',
    margin: 'auto',
    color: '#fff'
  },
  textBottom: {
    marginTop: '1.5em',
    borderTop: '1px solid #5c6474',
    paddingTop: '1.5em'
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
      '& .MuiExpansionPanelSummary-expandIcon': {
        color: '#3baaa6',
      },
    },
    '& .MuiExpansionPanelSummary-expandIcon': {
      color: '#999',
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
  const [expanded, setExpanded] = React.useState('panel1')
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.innerWrap}>
        <Box fontFamily="fontFamily" fontSize={12} color="#6f7e8b" mb={2}>Campaign Creation Tips</Box>

        <StyledExpansionPanel  square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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

        <StyledExpansionPanel  square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What if my campaign has a low number of creators?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">When you apply audience filters, your campaign becomes more targeted, but also reduces the total number of available creators. We recommend choosing only as many filters as necessary, then reviewing each creator as they apply to your campaign.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <StyledExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>What if I need to ship a product?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">You can send your package after you review and approve the creator's application. We store each creator's mailing address to expedite this process, but it's a good idea to confirm these details with the creator as you go.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <StyledExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>What happens after I submit my campaign?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">After you submit, the Grapevine Team will review and approve your campaign details. We'll also look for any obvious errors and may suggest changes that can improve your results. The approval process typically takes 24 hours. You will receive an e-mail once we have reviewed your campaign - you must reply to this email to finish the approval.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <StyledExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>Do I see the video before it gets published?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">Grapevine will automatically ask creators to upload videos as "unlisted" to give you a chance to review. You will be notified when any videos are uploaded, and can then request any changes if necessary. Remember that some changes may require significant effort on the creator's part.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <StyledExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <StyledPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>What makes a good campaign cover photo?</Typography>
          </StyledPanelSummary>
          <PanelDetails>
            <Typography variant="body2">Your campaign cover photo is displayed alongside your campaign details in the marketplace. It should feature a high resolution photo of the product or service that you are advertising. Typically, successful cover photos are colorful, eye-catching in some way, or feature people using the product.</Typography>
          </PanelDetails>
        </StyledExpansionPanel>

        <Box className={classes.textBottom}>
          <Typography variant="h6" component="h4" gutterBottom>Have any more questions?</Typography>
          <Typography variant="body2" component="p" gutterBottom>Feel free to e-mail us at <Link>pro@grapevinelogic.com</Link>, or start a chat dialog by clicking the floating green icon at the bottom-right corner of this page.</Typography>
          <Typography variant="body2" component="p">We love feedback of all kinds! What do you love about this page? What do you think could be improved? Let us know at <Link>ro@grapevinelogic.com</Link>.</Typography>
        </Box>
      </Box>
      
    </Box>
  )
}

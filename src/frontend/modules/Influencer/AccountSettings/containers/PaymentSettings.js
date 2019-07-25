import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  TextField, 
  Paper,
  Typography,
  Link,
  Box,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
  },
  title: {
    fontSize: theme.typography.pxToRem(15),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px'
  }
}))

export function PaymentSettings () {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  
  return (
    <Paper className={classes.root}>
      <TextField
        id="outlined-email-input"
        label="Paypal Email Address"
        type="email"
        name="email"
        autoComplete="Paypal Email Address"
        margin="dense"
        variant="outlined"
        fullWidth
        style={{marginBottom: '20px'}}
      />

      <Typography variant="body2" component="p" color="textSecondary" style={{marginBottom: '20px'}}>United States residents and citizens living abroad that pay taxes in the United States must recognize their income from Grapevine. If you have earned more than $600 on Grapevine in a given year, Grapevine must provide you with a <Link>1099 form</Link> and file a copy with the IRS.</Typography>
      <Typography variant="body2" component="p" color="textSecondary" style={{marginBottom: '35px'}}>The below fields stand in place of a <Link>W9 form</Link> which is a request form tax identification information such as would be necessary to file a 1099. Entering incorrect information may delay receiving your tax return.</Typography>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{marginBottom: '20px'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.header}
        >
          <Typography className={classes.title}>SSN (Grapevine pays an individual)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <TextField
            id="outlined-name-input"
            label="First name"
            name="name"
            autoComplete="First name"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />

          <TextField
            id="outlined-last-name-input"
            label="Last name"
            name="phone"
            autoComplete="Last name"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />

          <TextField
            id="outlined-ssn-input"
            label="SSN (Social Security Number) "
            name="email"
            autoComplete="SSN (Social Security Number)"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{marginBottom: '30px'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.header}
        >
          <Typography className={classes.title}>EIN (Grapevine pays a company)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <TextField
            id="outlined-ein-input"
            label="Company"
            name="email"
            autoComplete="Company"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />

          <TextField
            id="outlined-ein-input"
            label="EIN (Employer Identification Number)"
            name="email"
            autoComplete="EIN (Employer Identification Number)"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Box textAlign="right" style={{marginBottom: '20px'}}>
        <Button variant="contained" color="primary">Update Payment Settings</Button>
      </Box>

      <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '5px'}}>If you do not pay taxes in the United States and the platform prevents you from doing a sponsorship, please contact <Link>support@grapevinelogic.com</Link> to update your account. </Typography>
      



    </Paper>
  )
}

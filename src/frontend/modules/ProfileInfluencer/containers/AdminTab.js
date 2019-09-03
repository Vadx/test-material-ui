import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: 20,
    borderBottom: '1px solid #ccc'
  },
  border: {
    marginBottom: 20,
    borderBottom: '1px solid #ccc'
  }
}))


export function AdminTab () {
  const classes = useStyles()

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, [])

  return (
    <Box>
      <List className={classes.list}>
        <ListItem>
          <Link variant="body2">email@gmail.com</Link>
        </ListItem>
        <ListItem>
          <Link variant="body2">email2@gmail.com</Link>
        </ListItem>
        <ListItem>
          <Link variant="body2">email3@gmail.com</Link>
        </ListItem>
      </List> 
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="subtitle2">Youtube Minimum:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-number"
            value={0}
            type="number"
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <FormControl variant="outlined" margin="dense" fullWidth>
            <InputLabel ref={inputLabel} htmlFor="outlined-simple2">usd</InputLabel>
            <Select
              value={20}
              input={<OutlinedInput labelWidth={labelWidth} name="usd" id="outlined-simple2" />}
            >
              <MenuItem value={20}>usd</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.border}></Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">Youtube Default:</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-number2"
            value={0}
            type="number"
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <FormControl variant="outlined" margin="dense" fullWidth>
            <InputLabel ref={inputLabel} htmlFor="outlined-simple">usd</InputLabel>
            <Select
              value={10}
              input={<OutlinedInput labelWidth={labelWidth} name="usd" id="outlined-simple" />}
            >
              <MenuItem value={10}>usd</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary">Deny Influencer</Button>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <Button variant="contained" color="primary">Update</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

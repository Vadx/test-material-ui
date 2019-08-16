import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from '@material-ui/core'


export default function SelectCard() {
  const [values, setValues] = React.useState({
    card: '',
    name: '',
  });
  
  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, []);
  
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }
  
  return (
      <form autoComplete="off">
        <FormControl variant="outlined" margin="dense" fullWidth>
          <InputLabel ref={inputLabel} htmlFor="outlined-card-simple">Credit card</InputLabel>
          <Select
            value={values.card}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={labelWidth} name="card" id="outlined-card-simple" />}
          >
                  
            <MenuItem value={10}>Use default credit card</MenuItem>
            <MenuItem value={20}>Card 2</MenuItem>
            <MenuItem value={30}>Card 3</MenuItem>
          </Select>
        </FormControl>
      </form>
  )
}
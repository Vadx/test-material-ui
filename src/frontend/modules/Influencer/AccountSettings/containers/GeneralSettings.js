import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Input,
  Box,
  Button
  // OutlinedInput
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  formControl: {
    minWidth: '100%',
    maxWidth: '100%',
    marginBottom: '20px'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Accessories',
  'Adobe',
  'Advice',
  'Affiliate',
  'Affordable',
  'Audio',
  'Automotive',
  'Beauties',
  'Beauty',
  'Beautycon',
  'Boxes',
  'Bracelet',
  'Bracelets',
  'Bronzer',
  'Brush',
  'Brushes',
  'Challenge',
  'Cheap',
  'Clothing',
  'Collab',
  'Collaborations',
  'Collection',
  'College',
  'Comedy',
  'Concealer',
  'Contour',
  'Cooking',
  'Cooking/Health',
  'Cosmetics',
  'Coupon',
  'Curling',
  'Decor',
  'Detox',
  'DIY',
  'Dress',
  'Drugstore',
  'Earrings',
  'Ebates',
  'Equipment',
  'Extensions',
  'Eyebrows',
  'Eyeliner',
  'Eyeshadow',
  'Family',
  'Fashion',
  'Fitness',
  'Foundation',
  'Friends',
  'Funny',
  'Gaming',
  'Gifts',
  'Guide',
  'Hacks',
  'Halloween',
  'Hauls',
  'Health',
  'Holiday',
  'Internet',
  'Iphone',
  'Jewelry',
  'Lashes',
  'Lifestyle',
  'Liner',
  'Lipstick',
  'Lookbook',
  'Makeup',
  'Mascara',
  'Matte',
  'Movie',
  'Movies',
  'Music',
  'Nails',
  'Necklace',
  'News/Politics',
  'Organic',
  'Organization',
  'Outfit',
  'People',
  'Phone',
  'Photo',
  'Picture',
  'Pizza',
  'Planner',
  'Playlist',
  'Pregnancy',
  'Primer',
  'Product',
  'Purse',
  'Random',
  'Review',
  'Routine',
  'School',
  'Science/Education',
  'Shadow',
  'Shirt',
  'Shoes',
  'Shopping',
  'Skincare',
  'Software',
  'Sound',
  'Soundcloud',
  'Sports/Athletic/Fitness',
  'Storage',
  'Style',
  'Swatches',
  'Tech',
  'Teeth',
  'Tutorial',
  'TV Shows',
  'Unboxing',
  'Vegan',
  'Vlog',
  'Vlogging',
  'Website',
  'Workout',
  'Write'
]

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export function GeneralSettings () {
  const classes = useStyles()
  const theme = useTheme()
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  return (
    <Paper className={classes.root}>

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
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="dense"
        variant="outlined"
        fullWidth
        style={{marginBottom: '20px'}}
      />
      <TextField
        id="outlined-phone-input"
        label="Phone number"
        name="phone"
        autoComplete="Phone number"
        margin="dense"
        variant="outlined"
        fullWidth
        style={{marginBottom: '20px'}}
      />

      <TextField
        id="date"
        label="Birth date"
        type="date"
        variant="outlined"
        margin="dense"
        defaultValue="1990-05-24"
        style={{marginBottom: '10px'}}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="outlined-instagram-input"
        label="Minimum Offer on Youtube"
        type="number"
        name="youtube"
        autoComplete="Minimum Offer on Youtube"
        margin="dense"
        variant="outlined"
        fullWidth
        style={{marginBottom: '20px'}}
      />

      <TextField
        id="outlined-instagram-input"
        label="Minimum Offer on Instagram"
        type="number"
        name="instagram"
        autoComplete="Minimum Offer on Instagram"
        margin="dense"
        variant="outlined"
        fullWidth
        style={{marginBottom: '20px'}}
      />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Tags (choose up to 10)</InputLabel>
        <Select
          multiple
          value={personName}
          fullWidth
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box textAlign="right">
        <Button style={{marginRight: '10px'}}>Close my account</Button>
        <Button variant="contained" color="primary">Update General Settings</Button>
      </Box>

    </Paper>
  )
}

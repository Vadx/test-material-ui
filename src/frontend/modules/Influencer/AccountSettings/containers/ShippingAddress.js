import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Typography, 
  Grid, 
  Button, 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  }
}))


export function ShippingAddress () {
  const classes = useStyles()

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  const [values, setValues] = React.useState({
    state: '',
    country: ''
  })

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, [])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  const [state, setState] = React.useState({
    checkedB: true
  })

  const handleChangeCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }
  
  return (
    <Paper className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                id="outlined-street-input"
                label="Street"
                name="name"
                autoComplete="Street"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-apartment-input"
                label="Apartment "
                name="last"
                autoComplete="Apartment"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-city-input"
                label="City"
                name="card"
                autoComplete="City"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={3}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel ref={inputLabel} htmlFor="outlined-simple-country">Country</InputLabel>
                <Select
                  value={values.country}
                  onChange={handleChange}
                  input={<OutlinedInput labelWidth={labelWidth} name="country" id="outlined-simple-country" />}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="AF">Afghanistan</MenuItem>
                  <MenuItem value="AX">Åland Islands</MenuItem>
                  <MenuItem value="AL">Albania</MenuItem>
                  <MenuItem value="DZ">Algeria</MenuItem>
                  <MenuItem value="AS">American Samoa</MenuItem>
                  <MenuItem value="AD">Andorra</MenuItem>
                  <MenuItem value="AO">Angola</MenuItem>
                  <MenuItem value="AI">Anguilla</MenuItem>
                  <MenuItem value="AQ">Antarctica</MenuItem>
                  <MenuItem value="AG">Antigua And Barbuda</MenuItem>
                  <MenuItem value="AR">Argentina</MenuItem>
                  <MenuItem value="AM">Armenia</MenuItem>
                  <MenuItem value="AW">Aruba</MenuItem>
                  <MenuItem value="AU">Australia</MenuItem>
                  <MenuItem value="AT">Austria</MenuItem>
                  <MenuItem value="AZ">Azerbaijan</MenuItem>
                  <MenuItem value="BS">Bahamas</MenuItem>
                  <MenuItem value="BH">Bahrain</MenuItem>
                  <MenuItem value="BD">Bangladesh</MenuItem>
                  <MenuItem value="BB">Barbados</MenuItem>
                  <MenuItem value="BY">Belarus</MenuItem>
                  <MenuItem value="BE">Belgium</MenuItem>
                  <MenuItem value="BZ">Belize</MenuItem>
                  <MenuItem value="BJ">Benin</MenuItem>
                  <MenuItem value="BM">Bermuda</MenuItem>
                  <MenuItem value="BT">Bhutan</MenuItem>
                  <MenuItem value="BO">Bolivia, Plurinational State Of</MenuItem>
                  <MenuItem value="BQ">Bonaire, Sint Eustatius And Saba</MenuItem>
                  <MenuItem value="BA">Bosnia And Herzegovina</MenuItem>
                  <MenuItem value="BW">Botswana</MenuItem>
                  <MenuItem value="BV">Bouvet Island</MenuItem>
                  <MenuItem value="BR">Brazil</MenuItem>
                  <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                  <MenuItem value="BN">Brunei Darussala</MenuItem>
                  <MenuItem value="BG">Bulgaria</MenuItem>
                  <MenuItem value="BF">Burkina Faso</MenuItem>
                  <MenuItem value="BI">Burundi</MenuItem>
                  <MenuItem value="KH">Cambodia</MenuItem>
                  <MenuItem value="CM">Cameroon</MenuItem>
                  <MenuItem value="CA">Canada</MenuItem>
                  <MenuItem value="CV">Cape Verde</MenuItem>
                  <MenuItem value="KY">Cayman Islands</MenuItem>
                  <MenuItem value="CF">Central African Republic</MenuItem>
                  <MenuItem value="TD">Chad</MenuItem>
                  <MenuItem value="CL">Chile</MenuItem>
                  <MenuItem value="CN">China</MenuItem>
                  <MenuItem value="CX">Christmas Island</MenuItem>
                  <MenuItem value="CP">Clipperton Island</MenuItem>
                  <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                  <MenuItem value="CO">Colombia</MenuItem>
                  <MenuItem value="KM">Comoros</MenuItem>
                  <MenuItem value="CG">Congo</MenuItem>
                  <MenuItem value="CD">Congo, The Democratic Republic Of The</MenuItem>
                  <MenuItem value="CK">Cook Islands</MenuItem>
                  <MenuItem value="CR">Costa Rica</MenuItem>
                  <MenuItem value="CI">Côte D'Ivoire</MenuItem>
                  <MenuItem value="HR">Croatia</MenuItem>
                  <MenuItem value="CU">Cuba</MenuItem>
                  <MenuItem value="CW">Curaçao</MenuItem>
                  <MenuItem value="CY">Cyprus</MenuItem>
                  <MenuItem value="CZ">Czech Republic</MenuItem>
                  <MenuItem value="DK">Denmark</MenuItem>
                  <MenuItem value="DJ">Djibouti</MenuItem>
                  <MenuItem value="DM">Dominica</MenuItem>
                  <MenuItem value="DO">Dominican Republic</MenuItem>
                  <MenuItem value="EC">Ecuador</MenuItem>
                  <MenuItem value="EG">Egypt</MenuItem>
                  <MenuItem value="SV">El Salvador</MenuItem>
                  <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                  <MenuItem value="ER">Eritrea</MenuItem>
                  <MenuItem value="EE">Estonia</MenuItem>
                  <MenuItem value="ET">Ethiopia</MenuItem>
                  <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                  <MenuItem value="FO">Faroe Islands</MenuItem>
                  <MenuItem value="FJ">Fiji</MenuItem>
                  <MenuItem value="FI">Finland</MenuItem>
                  <MenuItem value="FR">France</MenuItem>
                  <MenuItem value="GF">French Guiana</MenuItem>
                  <MenuItem value="PF">French Polynesia</MenuItem>
                  <MenuItem value="TF">French Southern Territories</MenuItem>
                  <MenuItem value="GA">Gabon</MenuItem>
                  <MenuItem value="GM">Gambia</MenuItem>
                  <MenuItem value="GE">Georgia</MenuItem>
                  <MenuItem value="DE">Germany</MenuItem>
                  <MenuItem value="GH">Ghana</MenuItem>
                  <MenuItem value="GI">Gibraltar</MenuItem>
                  <MenuItem value="GR">Greece</MenuItem>
                  <MenuItem value="GL">Greenland</MenuItem>
                  <MenuItem value="GD">Grenada</MenuItem>
                  <MenuItem value="GP">Guadeloupe</MenuItem>
                  <MenuItem value="GU">Guam</MenuItem>
                  <MenuItem value="GT">Guatemala</MenuItem>
                  <MenuItem value="GG">Guernsey</MenuItem>
                  <MenuItem value="GN">Guinea</MenuItem>
                  <MenuItem value="GW">Guinea-Bissau</MenuItem>
                  <MenuItem value="GY">Guyana</MenuItem>
                  <MenuItem value="HT">Haiti</MenuItem>
                  <MenuItem value="HM">Heard Island And Mcdonald Islands</MenuItem>
                  <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                  <MenuItem value="HN">Honduras</MenuItem>
                  <MenuItem value="HK">Hong Kong</MenuItem>
                  <MenuItem value="HU">Hungary</MenuItem>
                  <MenuItem value="IS">Iceland</MenuItem>
                  <MenuItem value="IN">India</MenuItem>
                  <MenuItem value="ID">Indonesia</MenuItem>
                  <MenuItem value="IR">Iran, Islamic Republic Of</MenuItem>
                  <MenuItem value="IQ">Iraq</MenuItem>
                  <MenuItem value="IE">Ireland</MenuItem>
                  <MenuItem value="IM">Isle Of Man</MenuItem>
                  <MenuItem value="IL">Israel</MenuItem>
                  <MenuItem value="IT">Italy</MenuItem>
                  <MenuItem value="JM">Jamaica</MenuItem>
                  <MenuItem value="JP">Japan</MenuItem>
                  <MenuItem value="JE">Jersey</MenuItem>
                  <MenuItem value="JO">Jordan</MenuItem>
                  <MenuItem value="KZ">Kazakhstan</MenuItem>
                  <MenuItem value="KE">Kenya</MenuItem>
                  <MenuItem value="KI">Kiribati</MenuItem>
                  <MenuItem value="KP">Korea, Democratic People'S Republic Of</MenuItem>
                  <MenuItem value="KR">Korea, Republic Of</MenuItem>
                  <MenuItem value="KW">Kuwait</MenuItem>
                  <MenuItem value="KG">Kyrgyzstan</MenuItem>
                  <MenuItem value="LA">Lao People'S Democratic Republic</MenuItem>
                  <MenuItem value="LV">Latvia</MenuItem>
                  <MenuItem value="LB">Lebanon</MenuItem>
                  <MenuItem value="LS">Lesotho</MenuItem>
                  <MenuItem value="LR">Liberia</MenuItem>
                  <MenuItem value="LY">Libya</MenuItem>
                  <MenuItem value="LI">Liechtenstein</MenuItem>
                  <MenuItem value="LT">Lithuania</MenuItem>
                  <MenuItem value="LU">Luxembourg</MenuItem>
                  <MenuItem value="MO">Macao</MenuItem>
                  <MenuItem value="MK">Macedonia, The Former Yugoslav Republic Of</MenuItem>
                  <MenuItem value="MG">Madagascar</MenuItem>
                  <MenuItem value="MW">Malawi</MenuItem>
                  <MenuItem value="MY">Malaysia</MenuItem>
                  <MenuItem value="MV">Maldives</MenuItem>
                  <MenuItem value="ML">Mali</MenuItem>
                  <MenuItem value="MT">Malta</MenuItem>
                  <MenuItem value="MH">Marshall Islands</MenuItem>
                  <MenuItem value="MQ">Martinique</MenuItem>
                  <MenuItem value="MR">Mauritania</MenuItem>
                  <MenuItem value="MU">Mauritius</MenuItem>
                  <MenuItem value="YT">Mayotte</MenuItem>
                  <MenuItem value="MX">Mexico</MenuItem>
                  <MenuItem value="FM">Micronesia, Federated States Of</MenuItem>
                  <MenuItem value="MD">Moldova, Republic Of</MenuItem>
                  <MenuItem value="MC">Monaco</MenuItem>
                  <MenuItem value="MN">Mongolia</MenuItem>
                  <MenuItem value="ME">Montenegro</MenuItem>
                  <MenuItem value="MS">Montserrat</MenuItem>
                  <MenuItem value="MA">Morocco</MenuItem>
                  <MenuItem value="MZ">Mozambique</MenuItem>
                  <MenuItem value="MM">Myanmar</MenuItem>
                  <MenuItem value="NA">Namibia</MenuItem>
                  <MenuItem value="NR">Nauru</MenuItem>
                  <MenuItem value="NP">Nepal</MenuItem>
                  <MenuItem value="NL">Netherlands</MenuItem>
                  <MenuItem value="NC">New Caledonia</MenuItem>
                  <MenuItem value="NZ">New Zealand</MenuItem>
                  <MenuItem value="NI">Nicaragua</MenuItem>
                  <MenuItem value="NE">Niger</MenuItem>
                  <MenuItem value="NG">Nigeria</MenuItem>
                  <MenuItem value="NU">Niue</MenuItem>
                  <MenuItem value="NF">Norfolk Island</MenuItem>
                  <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                  <MenuItem value="NO">Norway</MenuItem>
                  <MenuItem value="OM">Oman</MenuItem>
                  <MenuItem value="PK">Pakistan</MenuItem>
                  <MenuItem value="PW">Palau</MenuItem>
                  <MenuItem value="PS">Palestine, State Of</MenuItem>
                  <MenuItem value="PA">Panama</MenuItem>
                  <MenuItem value="PG">Papua New Guinea</MenuItem>
                  <MenuItem value="PY">Paraguay</MenuItem>
                  <MenuItem value="PE">Peru</MenuItem>
                  <MenuItem value="PH">Philippines</MenuItem>
                  <MenuItem value="PN">Pitcairn</MenuItem>
                  <MenuItem value="PL">Poland</MenuItem>
                  <MenuItem value="PT">Portugal</MenuItem>
                  <MenuItem value="PR">Puerto Rico</MenuItem>
                  <MenuItem value="QA">Qatar</MenuItem>
                  <MenuItem value="RE">Réunion</MenuItem>
                  <MenuItem value="RO">Romania</MenuItem>
                  <MenuItem value="RU">Russian Federation</MenuItem>
                  <MenuItem value="RW">Rwanda</MenuItem>
                  <MenuItem value="BL">Saint Barthélemy</MenuItem>
                  <MenuItem value="SH">Saint Helena, Ascension And Tristan Da Cunha</MenuItem>
                  <MenuItem value="KN">Saint Kitts And Nevis</MenuItem>
                  <MenuItem value="LC">Saint Lucia</MenuItem>
                  <MenuItem value="MF">Saint Martin (French Part)</MenuItem>
                  <MenuItem value="PM">Saint Pierre And Miquelon</MenuItem>
                  <MenuItem value="VC">Saint Vincent And The Grenadines</MenuItem>
                  <MenuItem value="WS">Samoa</MenuItem>
                  <MenuItem value="SM">San Marino</MenuItem>
                  <MenuItem value="ST">Sao Tome And Principe</MenuItem>
                  <MenuItem value="SA">Saudi Arabia</MenuItem>
                  <MenuItem value="SN">Senegal</MenuItem>
                  <MenuItem value="RS">Serbia</MenuItem>
                  <MenuItem value="SC">Seychelles</MenuItem>
                  <MenuItem value="SL">Sierra Leone</MenuItem>
                  <MenuItem value="SG">Singapore</MenuItem>
                  <MenuItem value="SX">Sint Maarten (Dutch Part)</MenuItem>
                  <MenuItem value="SK">Slovakia</MenuItem>
                  <MenuItem value="SI">Slovenia</MenuItem>
                  <MenuItem value="SB">Solomon Islands</MenuItem>
                  <MenuItem value="SO">Somalia</MenuItem>
                  <MenuItem value="ZA">South Africa</MenuItem>
                  <MenuItem value="GS">South Georgia And The South Sandwich Islands</MenuItem>
                  <MenuItem value="SS">South Sudan</MenuItem>
                  <MenuItem value="ES">Spain</MenuItem>
                  <MenuItem value="LK">Sri Lanka</MenuItem>
                  <MenuItem value="SD">Sudan</MenuItem>
                  <MenuItem value="SR">Suriname</MenuItem>
                  <MenuItem value="SJ">Svalbard And Jan Mayen</MenuItem>
                  <MenuItem value="SZ">Swaziland</MenuItem>
                  <MenuItem value="SE">Sweden</MenuItem>
                  <MenuItem value="CH">Switzerland</MenuItem>
                  <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                  <MenuItem value="TW">Taiwan, Province Of China</MenuItem>
                  <MenuItem value="TJ">Tajikistan</MenuItem>
                  <MenuItem value="TZ">Tanzania, United Republic Of</MenuItem>
                  <MenuItem value="TH">Thailand</MenuItem>
                  <MenuItem value="TL">Timor-Leste</MenuItem>
                  <MenuItem value="TG">Togo</MenuItem>
                  <MenuItem value="TK">Tokelau</MenuItem>
                  <MenuItem value="TO">Tonga</MenuItem>
                  <MenuItem value="TT">Trinidad And Tobago</MenuItem>
                  <MenuItem value="TN">Tunisia</MenuItem>
                  <MenuItem value="TR">Turkey</MenuItem>
                  <MenuItem value="TM">Turkmenistan</MenuItem>
                  <MenuItem value="TC">Turks And Caicos Islands</MenuItem>
                  <MenuItem value="TV">Tuvalu</MenuItem>
                  <MenuItem value="UG">Uganda</MenuItem>
                  <MenuItem value="UA">Ukraine</MenuItem>
                  <MenuItem value="AE">United Arab Emirates</MenuItem>
                  <MenuItem value="GB">United Kingdom</MenuItem>
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="UM">United States Minor Outlying Islands</MenuItem>
                  <MenuItem value="UY">Uruguay</MenuItem>
                  <MenuItem value="UZ">Uzbekistan</MenuItem>
                  <MenuItem value="VU">Vanuatu</MenuItem>
                  <MenuItem value="VE">Venezuela, Bolivarian Republic Of</MenuItem>
                  <MenuItem value="VN">Viet Nam</MenuItem>
                  <MenuItem value="VG">Virgin Islands, British</MenuItem>
                  <MenuItem value="VI">Virgin Islands, U.S.</MenuItem>
                  <MenuItem value="WF">Wallis And Futuna</MenuItem>
                  <MenuItem value="EH">Western Sahara</MenuItem>
                  <MenuItem value="YE">Yemen</MenuItem>
                  <MenuItem value="ZM">Zambia</MenuItem>
                  <MenuItem value="ZW">Zimbabwe</MenuItem>
                  <MenuItem value="ZZ"></MenuItem>
                  <MenuItem value="AN">Netherlands Antilles</MenuItem>
                  <MenuItem value="BU">Burma</MenuItem>
                  <MenuItem value="CS">Serbia And Montenegro</MenuItem>
                  <MenuItem value="NT">Neutral Zone</MenuItem>
                  <MenuItem value="SF">Finland</MenuItem>
                  <MenuItem value="TP">East Timor</MenuItem>
                  <MenuItem value="YU">Yugoslavia</MenuItem>
                  <MenuItem value="ZR">Zaire</MenuItem>
                  <MenuItem value="XK">Kosovo</MenuItem>
                  <MenuItem value="AC">Ascension Island</MenuItem>
                  <MenuItem value="TA">Tristan Da Cunha</MenuItem>
                  <MenuItem value="IC">Canary Island</MenuItem>
                  <MenuItem value="EA">Ceuta, Melilla</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel ref={inputLabel} htmlFor="outlined-simple-state">State</InputLabel>
                <Select
                  value={values.state}
                  onChange={handleChange}
                  input={<OutlinedInput labelWidth={labelWidth} name="state" id="outlined-simple-state" />}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="US-AL">Alabama</MenuItem>
                  <MenuItem value="US-AK">Alaska</MenuItem>
                  <MenuItem value="US-AZ">Arizona</MenuItem>
                  <MenuItem value="US-AR">Arkansas</MenuItem>
                  <MenuItem value="US-CA">California</MenuItem>
                  <MenuItem value="US-CO">Colorado</MenuItem>
                  <MenuItem value="US-CT">Connecticut</MenuItem>
                  <MenuItem value="US-DE">Delaware</MenuItem>
                  <MenuItem value="US-FL">Florida</MenuItem>
                  <MenuItem value="US-GA">Georgia</MenuItem>
                  <MenuItem value="US-HI">Hawaii</MenuItem>
                  <MenuItem value="US-ID">Idaho</MenuItem>
                  <MenuItem value="US-IL">Illinois</MenuItem>
                  <MenuItem value="US-IN">Indiana</MenuItem>
                  <MenuItem value="US-IA">Iowa</MenuItem>
                  <MenuItem value="US-KS">Kansas</MenuItem>
                  <MenuItem value="US-KY">Kentucky</MenuItem>
                  <MenuItem value="US-LA">Louisiana</MenuItem>
                  <MenuItem value="US-ME">Maine</MenuItem>
                  <MenuItem value="US-MD">Maryland</MenuItem>
                  <MenuItem value="US-MA">Massachusetts</MenuItem>
                  <MenuItem value="US-MI">Michigan</MenuItem>
                  <MenuItem value="US-MN">Minnesota</MenuItem>
                  <MenuItem value="US-MS">Mississippi</MenuItem>
                  <MenuItem value="US-MO">Missouri</MenuItem>
                  <MenuItem value="US-MT">Montana</MenuItem>
                  <MenuItem value="US-NE">Nebraska</MenuItem>
                  <MenuItem value="US-NV">Nevada</MenuItem>
                  <MenuItem value="US-NH">New Hampshire</MenuItem>
                  <MenuItem value="US-NJ">New Jersey</MenuItem>
                  <MenuItem value="US-NM">New Mexico</MenuItem>
                  <MenuItem value="US-NY">New York</MenuItem>
                  <MenuItem value="US-NC">North Carolina</MenuItem>
                  <MenuItem value="US-ND">North Dakota</MenuItem>
                  <MenuItem value="US-OH">Ohio</MenuItem>
                  <MenuItem value="US-OK">Oklahoma</MenuItem>
                  <MenuItem value="US-OR">Oregon</MenuItem>
                  <MenuItem value="US-PA">Pennsylvania</MenuItem>
                  <MenuItem value="US-RI">Rhode Island</MenuItem>
                  <MenuItem value="US-SC">South Carolina</MenuItem>
                  <MenuItem value="US-SD">South Dakota</MenuItem>
                  <MenuItem value="US-TN">Tennessee</MenuItem>
                  <MenuItem value="US-TX">Texas</MenuItem>
                  <MenuItem value="US-UT">Utah</MenuItem>
                  <MenuItem value="US-VT">Vermont</MenuItem>
                  <MenuItem value="US-VA">Virginia</MenuItem>
                  <MenuItem value="US-WA">Washington</MenuItem>
                  <MenuItem value="US-WV">West Virginia</MenuItem>
                  <MenuItem value="US-WI">Wisconsin</MenuItem>
                  <MenuItem value="US-WY">Wyoming</MenuItem>
                  <MenuItem value="US-DC">District of Columbia</MenuItem>
                  <MenuItem value="US-AS">American Samoa</MenuItem>
                  <MenuItem value="US-GU">Guam</MenuItem>
                  <MenuItem value="US-MP">Northern Mariana Islands</MenuItem>
                  <MenuItem value="US-PR">Puerto Rico</MenuItem>
                  <MenuItem value="US-UM">United States Minor Outlying Islands</MenuItem>
                  <MenuItem value="US-VI">Virgin Islands</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-zip-input"
                label="Zip code"
                name="zip"
                autoComplete="Zip"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChangeCheckbox('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Hide City/State on profile"
              />
              <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '5px'}}>Selecting this option will hide your city and state from your public profile.</Typography> 
              <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '5px'}}>Only brands you are actively working with will have access to your shipping address to send you products. </Typography>
            </Grid>
            <Grid item xs={12} style={{textAlign: 'right'}}>
              <Button variant="contained" color="primary">Update Shipping Information</Button>
            </Grid>
          </Grid>
        </Paper>
  )
}

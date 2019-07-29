// Docs:
// https://fullcalendar.io/docs/react

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box
} from '@material-ui/core'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './assets/main.css'
import './assets/daygrid.css'



const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
  }
}))

export function Calendar () {
  const classes = useStyles()
  return (
    <Box className={classes.root} fontFamily="fontFamily">
      <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} 
        // events={[
        //   { title: 'event 1', date: '2019-07-30' },
        //   { title: 'event 2', date: '2019-07-31' }
        // ]}
      />
    </Box>
  )
}

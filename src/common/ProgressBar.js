import React from 'react'
import styled from 'styled-components'
import {Box, Typography} from '@material-ui/core'


const Wrap = styled.div`
  background: #fafafa;
  padding: 20px;
  margin-bottom: 20px;
`

const ProgressLine = styled.div`
  overflow: hidden;
  background-color: #f5f5f5;
  height: 10px;
  border-radius: 2px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  margin-right: 10px;
  position: relative;
  top: -1px;
`


export function ProgressBar() {
  return (
    <Wrap>
      <Typography variant='button' display='block'>Campaign Progress:</Typography> 
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box flexGrow={1}>
          <ProgressLine>
            <Box width='33%' p={0} my={0} style={{ background: '#3baaa6', height: '10px' }}>.</Box> 
          </ProgressLine>
        </Box>
        <Box>
          <Typography variant='subtitle2' gutterBottom>33%</Typography>
        </Box>
      </Box>
    </Wrap>
  )
}

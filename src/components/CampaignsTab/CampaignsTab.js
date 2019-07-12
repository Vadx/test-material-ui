import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Tabs, Tab, Box} from '@material-ui/core'
import { ViewModule, ViewStream } from '@material-ui/icons'

import { CampaignInProgress } from './containers/CampaignInProgress'
import { Demographics } from './containers/Demographics'
import { LiveInstagramPosts } from './containers/LiveInstagramPosts'
import { LiveVideos } from './containers/LiveVideos'
import { Performance } from './containers/Performance'
import { Proposals } from './containers/Proposals'

const Wrap = styled.div`
  margin-bottom: 25px;
  position: relative;
  margin: 0 20px 25px;
`

const TabWrap = styled(Tabs)`
  position: relative;
`

const Line = styled.div`
  background: #ccc;
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: -1;
  left: 0;
`

const TabItem = styled(Tab)`
  font-size: 13px;
  text-transform: none;
  position: relative;
  padding-left: 0;
  padding-right: 0;
  min-width: 120px;
`

const SwichView = styled.div`
  position: absolute;
  right: 0;
  bottom: 4px;
`

function TabContainer(props) {
  return (
    <Box component="div">
      {props.children}
    </Box>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export function CampaignsTab () {
  const [value, setValue] = React.useState(1)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Wrap>
      <Box component="div" style={{position: 'relative', marginBottom: '20px'}}>
        <TabWrap value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
          <TabItem label="Proposals (0)" />  
          <TabItem label="In progress (1)" />
          <TabItem label="Live videos (0)" disabled />
          <TabItem label="Live instagram posts (0)" disabled />
          <TabItem label="Performance" />
          <TabItem label="Demographics" />
        </TabWrap>
        <Line />
        <SwichView>
          <ViewModule /> 
          <ViewStream />
        </SwichView>
      </Box>
      {value === 0 && <TabContainer><Proposals /></TabContainer>}
      {value === 1 && <TabContainer><CampaignInProgress /></TabContainer>}
      {value === 2 && <TabContainer><LiveVideos /></TabContainer>}
      {value === 3 && <TabContainer><LiveInstagramPosts /></TabContainer>}
      {value === 4 && <TabContainer><Performance/></TabContainer>}
      {value === 5 && <TabContainer><Demographics /></TabContainer>}
    </Wrap>
  )
}

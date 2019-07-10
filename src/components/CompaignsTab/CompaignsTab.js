import React from 'react'
import styled from 'styled-components'
import {Tabs, Tab} from '@material-ui/core'
// import Menu from '@material-ui/icons/Menu'

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

export function CompaignsTab () {
  const [value, setValue] = React.useState(1)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Wrap>
      <TabWrap value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
        <TabItem label="Proposals (0)" />  
        <TabItem label="In progress (1)" />
        <TabItem label="Live videos (0)" disabled />
        <TabItem label="Live instagram posts (0)" disabled />
        <TabItem label="Performance" />
        <TabItem label="Performance" />
        <TabItem label="Demographics" />
      </TabWrap>
      <Line />
    </Wrap>
  )
}

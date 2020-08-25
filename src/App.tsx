import React, { useState, useCallback } from 'react'
import { Provider } from 'react-redux'
import { Excel } from 'redux-spreadsheet'
import { TemplateOptionsAttributes } from './Attributes'
import { customStore } from './customStore'
import { TemplateOptionsCategory } from './Categories'
import 'redux-spreadsheet/dist/main.cjs.css'
import './App.css'
import { Tabs, Tab, Paper } from '@material-ui/core'
import { a11yProps, TabPanel } from './TabPanel'

const TemplateOptions = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleChangeTab = useCallback(
    (_, newValue) => {
      setTabValue(newValue)
    },
    [setTabValue]
  )
  
  return (
    <Paper style={{ display: "flex", flexFlow: "column", width: 500, maxWidth: 500, overflow: "auto", padding: 10 }}>
      <Tabs value={tabValue} onChange={handleChangeTab} aria-label="simple tabs example" centered>
        <Tab label="Category" {...a11yProps(0)} />
        <Tab label="Attribute" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <TemplateOptionsCategory/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <TemplateOptionsAttributes/>
      </TabPanel>
    </Paper>
  )
}

const TemplateOptionsContainer = () => {
  return (
    <Provider store={customStore}>
      <TemplateOptions />
    </Provider>
  )
}

const App = () => {

  return (
    <div className="App">
      <TemplateOptionsContainer/>
      <Excel style={{ width: '100%' }} customStore={customStore} />
    </div>
  )
}

export default App
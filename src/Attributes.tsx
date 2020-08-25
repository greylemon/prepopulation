import React, { useState, useCallback, useEffect } from "react"
import { sampleAttributes } from "./sample/attribute"
import { Tab, Tabs, Chip, Tooltip, Paper } from "@material-ui/core"
import { a11yProps, TabPanel } from "./TabPanel";
import { sampleReportingPeriods } from "./sample/reportingPeriod";
import { CustomButton, CommonTable } from "./Components";
import { ExcelStoreActions } from "./customStore";
import { useDispatch } from "react-redux";

const Labels = (
  {
    attribute,
    period,
    handleDeleteAttribute,
    handleDeletePeriod
  }
) => (
  <Paper style={{ 
    display: "flex", 
    flexFlow: "column", 
    justifyContent: "center", 
    minHeight: 50, 
    width: '100%',
    margin: '10px 0',
  }}>
    <div style={{ display: "flex", justifyContent: "center", padding: 5 }}>
      {
        attribute && 
        <Tooltip title="Attribute">
          <Chip label={attribute.name} onDelete={handleDeleteAttribute} color="primary" />
        </Tooltip>
      }
      {
        period && 
        <Tooltip title="Period">
          <Chip label={period.name} onDelete={handleDeletePeriod} color="secondary" />
        </Tooltip>
      }
    </div>
  </Paper>
)

export const TemplateOptionsAttributes = () => {
  const dispatch = useDispatch()
  const [attributes, setAttributes] = useState([])
  const [reportingPeriods, setReportingPeriods] = useState([])
  const [selectedAttribute, setSelectedAttribute] = useState()
  const [selectedReportingPeriod, setSelectedReportingPeriod] = useState()
  const [tabValue, setTabValue] = useState(0)
  const [attributeRow, setAttributeRow] = useState(1)
  const [attributeHeaderRow, setAttributeHeaderRow] = useState(3)

  const handleChangeTab = useCallback(
    (_, newValue) => {
      setTabValue(newValue)
    },
    [setTabValue]
  )

  const handleApply = useCallback(
    () => {
      dispatch(ExcelStoreActions.SET_ATTRIBUTE(
        {
          attributeRow,
          reportingPeriod: selectedReportingPeriod,
          attribute: selectedAttribute,
          attributeHeaderRow
        }
      ))
    },
    [
      dispatch,
      attributeRow,
      attributeHeaderRow,
      selectedAttribute,
      selectedReportingPeriod,
    ]
  )

  const handleClearAttribute = useCallback(
    () => setSelectedAttribute(null),
    [setSelectedAttribute]
  )

  const handleClearPeriod = useCallback(
    () => setSelectedReportingPeriod(null),
    [setSelectedReportingPeriod]
  )

  const handleClear = useCallback(
    () => {
      handleClearAttribute()
      handleClearPeriod()
    }, 
    [handleClearAttribute, handleClearPeriod]
  )

  const handleClickAttribute = useCallback(
    (_, rowData)  => {
      setSelectedAttribute(rowData)
    },
    [setSelectedAttribute]
  )

  const handleClickReportingPeriod = useCallback(
    (_, rowData)  => {
      setSelectedReportingPeriod(rowData)
    },
    [setSelectedReportingPeriod]
  )

  useEffect(
    () => {
      const fetchedAttributeRow = 1
      const fetchedAttributeHeaderRow = 3
      setAttributes(sampleAttributes)
      setReportingPeriods(sampleReportingPeriods)
      setAttributeRow(fetchedAttributeRow)
      setAttributeHeaderRow(fetchedAttributeHeaderRow)
    },
    [
      setAttributes, 
      setReportingPeriods, 
      setAttributeRow, 
      setAttributeHeaderRow
    ]
  )

  return (
    <div>
      <Labels 
        attribute={selectedAttribute}
        period={selectedReportingPeriod}
        handleDeleteAttribute={handleClearAttribute}
        handleDeletePeriod={handleClearPeriod} 
      />
      <Tabs style={{ marginBottom: 10 }} value={tabValue} onChange={handleChangeTab} aria-label="simple tabs example" centered>
        <Tab label="Attribute" {...a11yProps(0)} />
        <Tab label="Period" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <CommonTable data={attributes} handleClickRow={handleClickAttribute} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <CommonTable data={reportingPeriods} handleClickRow={handleClickReportingPeriod} />
      </TabPanel>
      {
        selectedAttribute && 
        selectedReportingPeriod && 
        <CustomButton handleClick={handleApply}/>
      }
      {
        (selectedAttribute ||
        selectedReportingPeriod) && 
        <CustomButton text="clear" handleClick={handleClear}/>
      }
    </div>
  )
}
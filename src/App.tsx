import React from 'react'
import './App.css'

import { oldbsJSON, newbsJSON } from './data'
import { 
  createProgram, 
  createOrganization, 
  createTemplate, 
  createSubmission, 
  createTemplatePackage, 
  createSubmissionData, 
  createMasterValueFromSubmission, 
  createOrderedParams,
  createOrderedJSONParams
} from './utils'
import { templates, templatePackages } from './data/template'
import { programs } from './data/program'
import { organizations } from './data/organization'
import { submissions, submissionDatas } from './data/submission'
import { IMasterValue, ISubmissionParam } from './@types'
import { createMasterValueQueryList } from './parser/template'
import { getHistoricalData } from './parser/masterValue'
import cloneDeep from 'clone-deep'
import { IExcelState } from 'redux-spreadsheet/src/@types/state'

const App = () => {
  const mockProgram = createProgram("Health Program")
  const mockOrganization = createOrganization("University Health Network")
  const mockOldTemplate = createTemplate(oldbsJSON, new Set(['2019/20 YE']))
  const mockNewTemplate = createTemplate(newbsJSON, new Set(['2020/21 YE']))
  const mockTemplatePackage = createTemplatePackage(
    "Health Package",
    [mockProgram._id],
    [mockOldTemplate._id, mockNewTemplate._id]
  )
  const mockSubmission = createSubmission(
    "Sample submission", 
    mockOrganization._id, 
    mockProgram._id,
    mockOldTemplate._id,
    mockTemplatePackage._id
  )

  const mockSubmissionData = createSubmissionData(
    mockSubmission._id, 
    mockOldTemplate.parameters, 
    oldbsJSON as any, 
    mockOldTemplate.reportingPeriods
  )

  mockSubmission.latestSubmissionDataId = mockSubmissionData._id
  
  programs.push(mockProgram)
  organizations.push(mockOrganization)
  templatePackages.push(mockTemplatePackage)
  submissions.push(mockSubmission)
  submissionDatas.push(mockSubmissionData)
  templates.push(mockOldTemplate)


  // SIMULATE POPULATION
  // Find submission data
  const submission = mockSubmission
  const submissionData = submissionDatas.find((submissionData) => submissionData._id === submission.latestSubmissionDataId)!

  const masterValues: IMasterValue[] = createMasterValueFromSubmission(submissionData, submission)

  // SIMULATE PREPOPULATION
  const newSubmission = createSubmission(
    "Sample submission", 
    mockOrganization._id, 
    mockProgram._id,
    mockNewTemplate._id,
    mockTemplatePackage._id
  )  

  const masterValueQueryList = createMasterValueQueryList(
    mockNewTemplate.parameters.prepopParams,
    newSubmission.orgId,
    newSubmission.programId
  )

  // This would be find method in mongodb - don't worry about optimization
  const historicalData = getHistoricalData(masterValueQueryList, masterValues)
  
  const historicalDataSet: { [key: string]: string | number | null } = {}
  
  historicalData.forEach(
    (historical) => {
      historicalDataSet[createOrderedJSONParams(historical)] = historical.value
      console.log(createOrderedJSONParams(historical))
    }
  )

  // Create a JSON map for the workbook
  // const workbook
  const { workbookAttributeData, workbookCategoryData } = mockNewTemplate.parameters

  const sheetNames = Object.keys(workbookAttributeData)

  const generatedWorkbook = cloneDeep(mockNewTemplate.workbook) as IExcelState
  const sheetsMap = generatedWorkbook.sheetsMap

  for (let sheetName of sheetNames) {
    const sheetAttributeData = workbookAttributeData[sheetName]
    const sheetCategoryData = workbookCategoryData[sheetName]

    if (sheetAttributeData && sheetCategoryData) {
      for (let rowIndex in sheetCategoryData) {
        const categoryData = sheetCategoryData[rowIndex]
        for (let columnIndex in sheetAttributeData) {
          const attributeData = sheetAttributeData[columnIndex]

          const params = createOrderedJSONParams({ ...categoryData, ...attributeData })

          // console.log(params)
          if (historicalDataSet[params]) {
            if (sheetsMap[sheetName]) {
              const sheet = sheetsMap[sheetName].data

              if (!sheet[+rowIndex]) sheet[+rowIndex] = {}
              if (!sheet[+rowIndex][+columnIndex]) sheet[+rowIndex][+columnIndex] = {}

              const value = historicalDataSet[params]

              console.log('value', value)

              const cell = sheet[+rowIndex][+columnIndex]

              // cell.type = typ
            }
          }
        }
      }
    }
  }

  return (
    <div className="App">
      {/* {components} */}
      {/* <Excel /> */}
      {/* <p>SUBMISSION DATA</p>
      {JSON.stringify(submissionData)} */}
      {JSON.stringify(masterValues)}
      <hr/>
      {JSON.stringify(masterValueQueryList)}
    </div>
  )
}

export default App

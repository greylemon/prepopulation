import React from 'react'
// import './App.css'

import { 
  createProgram, 
  createOrganization, 
  createTemplate, 
  createSubmission, 
  createTemplatePackage, 
  createSubmissionData, 
  createMasterValueFromSubmission, 
  createOrderedJSONParams
} from './utils'
import { templates, templatePackages } from './data/template'
import { programs } from './data/program'
import { organizations } from './data/organization'
import { submissions, submissionDatas } from './data/submission'
import { IMasterValue } from './@types'
import { createMasterValueQueryList } from './parser/template'
import { getHistoricalData } from './parser/masterValue'
import { newbsJSON } from './workbooks/newbs'
import { oldbsJSON } from './workbooks/oldbs'
import { generateWorkbook } from './parser/submission'
import { Excel } from 'redux-spreadsheet'
import 'redux-spreadsheet/dist/main.cjs.css'

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
    oldbsJSON, 
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
    }
  )

  // Create a JSON map for the workbook
  // const workbook
  const generatedWorkbook = generateWorkbook(mockNewTemplate, historicalDataSet)

  return (
    <div className="App">
      <Excel initialState={generatedWorkbook} />
    </div>
  )
}

export default App

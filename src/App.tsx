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
import { templates, templatePackages } from './database/template'
import { programs } from './database/program'
import { organizations } from './database/organization'
import { submissions, submissionDatas } from './database/submission'
import { createMasterValueQueryList } from './parser/template'
import { getHistoricalData } from './parser/masterValue'
import { newbsJSON } from './workbooks/newbs'
import { oldbsJSON } from './workbooks/oldbs'
import { generateWorkbook } from './parser/submission'
import { Excel } from 'redux-spreadsheet'
import 'redux-spreadsheet/dist/main.cjs.css'
import { masterValues } from './database/masterValue'

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
  const submission = mockSubmission
  const submissionData = submissionDatas.find((submissionData) => submissionData._id === submission.latestSubmissionDataId)!

  createMasterValueFromSubmission(submissionData, submission).forEach(
    (e) => masterValues.push(e)
  )

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

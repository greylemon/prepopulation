import React from 'react'
import './App.css'

import {
  // newbsJSON,
  oldbsJSON,
} from './data'
import { createProgram, createOrganization, createTemplate, createSubmission, createTemplatePackage, createMasterValue, createSubmissionData } from './utils'
import { extractSubmissionData } from './parser/submission'
import { templates, templatePackages } from './data/template'
import { programs } from './data/program'
import { organizations } from './data/organization'
import { submissions, submissionDatas } from './data/submission'

const App = () => {
  const mockProgram = createProgram("Health Program")
  const mockOrganization = createOrganization("University Health Network")
  const mockTemplate = createTemplate(oldbsJSON, new Set(['2017/18 YE']))
  const mockTemplatePackage = createTemplatePackage(
    "Health Package",
    [mockProgram._id],
    [mockTemplate._id]
  )
  const mockSubmission = createSubmission(
    "Sample submission", 
    mockOrganization._id, 
    mockProgram._id,
    mockTemplate._id,
    mockTemplatePackage._id
  )

  const mockSubmissionData = createSubmissionData(
    mockSubmission._id, 
    mockTemplate.parameters, 
    oldbsJSON as any, 
    mockTemplate.reportingPeriods
  )

  mockSubmission.latestSubmissionDataId = mockSubmissionData._id
  
  programs.push(mockProgram)
  organizations.push(mockOrganization)
  templatePackages.push(mockTemplatePackage)
  submissions.push(mockSubmission)
  submissionDatas.push(mockSubmissionData)
  templates.push(mockTemplate)


  // ! Simulation !
  // Find submission data
  const submission = mockSubmission
  const submissionData = submissionDatas.find((submissionData) => submissionData._id === submission.latestSubmissionDataId)!

  // Find template of submission
  const submissionTemplatePackage = templatePackages.find(
    (templatePackage) => templatePackage._id === mockSubmission.templatePackageId
  )!
  const submissionTemplate = templates.find((template) => template._id === mockSubmission.templateId)!
  

  return (
    <div className="App">
      {/* {components} */}
      {/* <Excel /> */}
      {/* <p>SUBMISSION DATA</p>
      {JSON.stringify(submissionData)} */}
    </div>
  )
}

export default App

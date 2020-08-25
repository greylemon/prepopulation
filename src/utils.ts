// Ensures order in JSON

import { extractDataElements, createMasterValueQueryList } from "./parser/template";
import uniqid from 'uniqid'
import { ITemplate, ITemplatePackage, ISubmission, IProgram, IOrganization, ISubmissionData, IDataElements, IMasterValue, ISubmissionParam } from "./@types";
import { IExcelState } from "redux-spreadsheet/src/@types/state";
import { extractSubmissionData, generateSubmissionWorkbook } from "./parser/submission";
import { oldbsJSON } from "./workbooks/oldbs";
import { newbsJSON } from "./workbooks/newbs";
import { programs } from "./database/program";
import { organizations } from "./database/organization";
import { templatePackages, templates } from "./database/template";
import { submissions, submissionDatas } from "./database/submission";
import { masterValues } from "./database/masterValue";
import { getHistoricalData } from "./parser/masterValue";
import { updateWorkbookReference } from "redux-spreadsheet";

export const createOrderedJSONParams = ({
  category,
  categoryGroup,
  attributeId,
  reportingPeriod, }: ISubmissionParam) => JSON.stringify({ category, categoryGroup, attributeId, reportingPeriod });

export const createOrderedParams = (
  {
    category,
    categoryGroup,
    attributeId,
    reportingPeriod, }: ISubmissionParam
): ISubmissionParam => (
  {
    category,
    categoryGroup,
    attributeId,
    reportingPeriod, }
)

export const createTemplate = (
  workbook: any, 
  reportingPeriods: Set<string>
): ITemplate => ({
  _id: uniqid(),
  parameters: extractDataElements(
    workbook,
    reportingPeriods
  ),
  workbook,
  reportingPeriods
})

export const createPackage = (
  name: string,
  programIds: string[],
  templateIds: string[],
): ITemplatePackage => ({
  _id: uniqid(),
  name,
  programIds,
  templateIds,
})

export const createSubmission = (
  name: string,
  orgId: string,
  programId: string,
  templateId: string,
  templatePackageId: string
): ISubmission => (
  {
    _id: uniqid(),
    name,
    orgId,
    programId,
    templateId,
    templatePackageId,
  }
)

export const createProgram = (name: string): IProgram => (
  {
    _id: uniqid(),
    name
  }
)

export const createOrganization = (name: string): IOrganization => (
  {
    _id: uniqid(),
    name
  }
)

export const createTemplatePackage = (
  name: string, 
  programIds: string[],
  templateIds: string[]
): ITemplatePackage => (
  {
    _id: uniqid(),
    name,
    programIds,
    templateIds
  }
)

export const createSubmissionData = (
  submissionId: string,
  dataElements: IDataElements,
  workbook: IExcelState, 
  inputReportingPeriods: Set<string>
): ISubmissionData => (
  {
    _id: uniqid(),
    submissionId,
    submissionData: extractSubmissionData(workbook, dataElements, inputReportingPeriods)
  }
)

export const createMasterValueFromSubmission = (
  submissionData: ISubmissionData, 
  submission: ISubmission
): IMasterValue[] => {
  return submissionData.submissionData.map(
    (
      {
        attributeId,
        reportingPeriod,
        value,
        category,
        categoryGroup: group
      }
    ) => (
        {
          attributeId,
          category,
          categoryGroup: group,
          orgId: submission.orgId,
          programId: submission.programId,
          reportingPeriod,
          submissionId: submission._id,
          templateId: submission.templateId,
          // templateTypeId: submission.temp
          value,
        }
      )
  )
}


export const createSampleSubmission = () => {
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

  const historicalDataSet: { [key: string]: string | number | null}  = {}

  historicalData.forEach(
    (historical) => {
      historicalDataSet[createOrderedJSONParams(historical)] = historical.value
    }
  )

  // Create a JSON map for the workbook
  // const workbook
  const generatedWorkbook = generateSubmissionWorkbook(mockNewTemplate, historicalDataSet)

  const updatedWorkbook = updateWorkbookReference(generatedWorkbook)
  return updatedWorkbook
}

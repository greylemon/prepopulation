// Ensures order in JSON

import { extractDataElements } from "./parser/template";
import uniqid from 'uniqid'
import { ITemplate, ITemplatePackage, ISubmission, IProgram, IOrganization, ISubmissionData, IDataElements } from "./@types";
import { IExcelState } from "redux-spreadsheet/src/@types/state";
import { extractSubmissionData } from "./parser/submission";

export const createJSONParams = ({
  category,
  group,
  attributeId,
  reportingPeriod, }: any) => JSON.stringify({ category, group, attributeId, reportingPeriod });

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

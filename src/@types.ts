import { IExcelState } from "redux-spreadsheet/src/@types/state";

export type ICategory = { categoryGroup?: string; category?: string; };
export type IRowToCategoryMap = { [key: string]: ICategory; };
export type IAttribute = { attributeId: string; reportingPeriod: string; };
export type IColumnToAttributeMap = { [key: string]: IAttribute; };
export type IWorkbookCategoryMap = { [key: string]: IRowToCategoryMap; };
export type IWorkbookAttributeMap = { [key: string]: IColumnToAttributeMap; };

export type ISubmissionParam = {
  category?: string
  categoryGroup?: string
  attributeId: string
  reportingPeriod: string
}

export type ISubmissionDataParams = ISubmissionParam & {
  value: string
}

export type IDataElements = {
  periods: string[];
  categories: string[];
  categoryGroups: string[];
  attributes: string[];
  inputParams: ISubmissionParam[];
  prepopParams: ISubmissionParam[];
  workbookAttributeData: IWorkbookAttributeMap;
  workbookCategoryData: IWorkbookCategoryMap;
};

export type ISubmission = {
  _id: string
  orgId: string
  templateId: string
  templatePackageId: string
  programId: string
  name: string
  latestSubmissionDataId?: string
}

export type ISubmissionData = {
  _id: string
  submissionId: string
  submissionData: ISubmissionDataParams[]
}

export type ITemplatePackage = {
  _id: string
  name: string
  templateIds: string[]
  programIds: string[]
}

export type IOrganization = {
 _id: string
 name: string
}

export type IProgram = {
  _id: string
  name: string
}

/**
 * Ideally, input and prepopulation parameters should not be here
 * because reporting period has to be updated in the template every time...
 * This makes the template specific and not a true generic template
 */
export type ITemplate = {
  _id: string
  workbook: IExcelState
  parameters: IDataElements
  reportingPeriods: Set<string>
} 

export type IMasterValue = {
  programId: string
  orgId: string
  // templateTypeId: string
  submissionId: string
  templateId: string
  value: string | number | null
} & ISubmissionParam

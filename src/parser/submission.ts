import { IExcelState } from 'redux-spreadsheet/src/@types/state';
import { createOrderedJSONParams } from '../utils';
import { IDataElements, ITemplate } from "../@types";
import cloneDeep from 'clone-deep';
export const extractSubmissionData = (
  { sheetsMap, results }: IExcelState,
  dataElements: IDataElements,
  inputReportingPeriods: Set<string>
) => {
  // Find column with current reporting period
  const submissionData = [];

  const {
    workbookAttributeData,
    workbookCategoryData,
    inputParams, } = dataElements;

  // create set out of input params
  const inputParamsSet = new Set(
    inputParams.map((inputParam) => JSON.stringify(inputParam))
  );

  for (let sheetName in workbookCategoryData) {
    const categoryContent = workbookCategoryData[sheetName];
    const attributeContent = workbookAttributeData[sheetName];
    const sheet = sheetsMap[sheetName].data;

    for (let rowIndex in categoryContent) {
      const relativeCategory = categoryContent[+rowIndex];

      const row = sheet[+rowIndex];
      if (row) {
        for (let columnIndex in attributeContent) {
          const relativeAttribute = attributeContent[columnIndex];
          const cell = row[+columnIndex];

          const paramJSON = createOrderedJSONParams({
            category: relativeCategory.category,
            categoryGroup: relativeCategory.categoryGroup,
            attributeId: relativeAttribute.attributeId,
            reportingPeriod: relativeAttribute.reportingPeriod,
          });

          if (inputReportingPeriods.has(relativeAttribute.reportingPeriod) &&
            inputParamsSet.has(paramJSON) &&
            cell) {
            let value = '';
            // ! CONSIDER OTHER TYPES
            switch (cell.type) {
              case 'formula':
                value = results[sheetName][rowIndex][columnIndex].toString();
                break;
              default:
                value = cell.value as string;
                break;
            }

            submissionData.push({
              ...relativeCategory,
              ...relativeAttribute,
              value,
            });
          }
        }
      }
    }
  }

  return submissionData;
};


export const generateWorkbook = (mockNewTemplate: ITemplate, historicalDataSet: { [key: string]: string | number | null }): IExcelState => {
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

          if (historicalDataSet[params] !== undefined) {
            if (sheetsMap[sheetName]) {
              const sheet = sheetsMap[sheetName].data

              if (!sheet[+rowIndex])
                sheet[+rowIndex] = {}

              const value = historicalDataSet[params]

              sheet[+rowIndex][+columnIndex] = {
                type: typeof value,
                value: value as string | number,
                style: sheet[+rowIndex][+columnIndex] ? sheet[+rowIndex][+columnIndex].style : undefined
              }

              console.log(rowIndex, columnIndex)
            }
          }
        }
      }
    }
  }

  return generatedWorkbook
}

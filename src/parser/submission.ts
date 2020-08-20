import { IExcelState } from 'redux-spreadsheet/src/@types/state';
import { createOrderedJSONParams } from '../utils';
import { IDataElements, ITemplate } from "../@types";
import cloneDeep from 'clone-deep';
import { extractDataElements } from './template';

/**
 * Extract cell values for the column matching the given input reporting periods
 * @param param0 
 * @param dataElements 
 * @param inputReportingPeriods 
 */
export const extractSubmissionData = (
  excelState: IExcelState,
  dataElements: IDataElements,
  inputReportingPeriods: Set<string>
) => {
  // Find column with current reporting period
  const { sheetsMap, results } = excelState
  const submissionData = [];

  const {
    workbookAttributeData,
    workbookCategoryData,
   } = dataElements;

  const submissionDataElements = extractDataElements(excelState, inputReportingPeriods)

  if (
    JSON.stringify(submissionDataElements) !== JSON.stringify(dataElements)
  ) throw new Error('Submission data elements do not match the data elements of its template')

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

          if (inputReportingPeriods.has(relativeAttribute.reportingPeriod) && cell) {
            let value = '';
            // TODO : CONSIDER OTHER TYPES
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

/**
 * Generates a new submission workbook by combining the template workbook and historical values
 * 
 * @param mockNewTemplate 
 * @param historicalDataSet 
 */
export const generateSubmissionWorkbook = (mockNewTemplate: ITemplate, historicalDataSet: { [key: string]: string | number | null }): IExcelState => {
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
            }
          }
        }
      }
    }
  }

  return generatedWorkbook
}

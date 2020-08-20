import { IExcelState, IRows } from 'redux-spreadsheet/src/@types/state';
import { IRowToCategoryMap, ICategory, IColumnToAttributeMap, IDataElements, IWorkbookCategoryMap, IWorkbookAttributeMap, ISubmissionParam, IMasterValue } from "../@types";
import { createOrderedJSONParams } from "../utils";

/**
 * Loops through columns {groupColumnPosition} and {categoryColumnPosition} to extract category data elements
 * Data elements include category and group
 * 
 * @param rows 
 * @param groupColumnPosition 
 * @param categoryColumnPosition 
 */
const extractCategories = (
  rows: IRows,
  groupColumnPosition: number,
  categoryColumnPosition: number
) => {
  const categoryData: IRowToCategoryMap = {};
  const categoryGroups: Set<string> = new Set();
  const categories: Set<string> = new Set();

  for (let rowIndex in rows) {
    const row = rows[rowIndex];

    const data: ICategory = {};
    const groupCell = row[groupColumnPosition];
    const categoryCell = row[categoryColumnPosition];

    if (groupCell && groupCell.value) {
      const categoryGroup = groupCell.value as string;
      data.categoryGroup = categoryGroup;
      categoryGroups.add(categoryGroup);
    }

    if (categoryCell && categoryCell.value) {
      const category = categoryCell.value as string;
      data.category = category;
      categories.add(category);
    }

    if (data.category || data.categoryGroup)
      categoryData[rowIndex] = data;
  }

  return { categoryData, categoryGroups, categories };
};

/**
 * Loops through row {attributeRowLocation} to extracts attribute data elements
 * Data elements include attribute and reporting period
 * 
 * @param rows 
 * @param attributeRowLocation 
 * @param inputReportingPeriods 
 */
const extractAttributes = (
  rows: IRows,
  attributeRowLocation: number,
  inputReportingPeriods: Set<string>
) => {
  const attributeData: IColumnToAttributeMap = {};
  const attributes: Set<string> = new Set();
  const periods: Set<string> = new Set();
  const firstRow = rows[attributeRowLocation] || {};
  const prepopAttributes: Set<string> = new Set();
  const inputAttributes: Set<string> = new Set();

  for (let columnIndex in firstRow) {
    const cell = firstRow[columnIndex];
    const cellValue = cell.value as string;

    if (cellValue) {
      const [attributeId, reportingPeriod] = cellValue.split('|');
      attributeData[columnIndex] = { attributeId, reportingPeriod };
      attributes.add(attributeId);
      periods.add(reportingPeriod);

      if (inputReportingPeriods.has(reportingPeriod)) {
        inputAttributes.add(attributeId);
      }
      else {
        prepopAttributes.add(cellValue);
      }
    }
  }

  return {
    attributeData,
    attributes,
    periods,
    inputAttributes,
    prepopAttributes,
  };
};

/**
 * Extracts the following data elements from a template workbook:
 * Reporting period
 * Category
 * Groups
 * Attribute
 * Input params
 * Prepop params
 * Workbook category: Mapping between position and category data elements (including group)
 * Workbook attribute: Mapping between position and attribute data elements (including reporting period)
 * 
 * @param data 
 * @param inputReportingPeriods 
 * @param attributeColumn 
 * @param groupColumn 
 * @param categoryColumn 
 */
export const extractDataElements = (
  data: IExcelState,
  inputReportingPeriods: Set<string>,
  attributeColumn = 1,
  groupColumn = 1,
  categoryColumn = 2,
): IDataElements => {
  const periods: Set<string> = new Set();
  const categories: Set<string> = new Set();
  const groups: Set<string> = new Set();
  const attributes: Set<string> = new Set();
  const prepopParams: Set<string> = new Set();
  const inputParams: Set<string> = new Set();
  const workbookCategoryData: IWorkbookCategoryMap = {};
  const workbookAttributeData: IWorkbookAttributeMap = {};

  for (let sheetName in data.sheetsMap) {
    const sheet = data.sheetsMap[sheetName];
    const sheetData = sheet.data;

    const sheetCategories = extractCategories(sheetData, groupColumn, categoryColumn);
    const sheetAttributes = extractAttributes(
      sheetData,
      attributeColumn,
      inputReportingPeriods
    );

    sheetCategories.categories.forEach((category) => categories.add(category));
    sheetCategories.categoryGroups.forEach((group) => groups.add(group));

    sheetAttributes.attributes.forEach((attribute) => attributes.add(attribute));
    sheetAttributes.periods.forEach((period) => periods.add(period));

    workbookCategoryData[sheetName] = sheetCategories.categoryData;
    workbookAttributeData[sheetName] = sheetAttributes.attributeData;

    for (let rowIndex in sheetCategories.categoryData) {
      const { category, categoryGroup } = sheetCategories.categoryData[rowIndex];

      for (let columnIndex in sheetAttributes.attributeData) {
        const { attributeId, reportingPeriod } = sheetAttributes.attributeData[columnIndex];
        const contentJSON = createOrderedJSONParams({
          category,
          categoryGroup,
          attributeId,
          reportingPeriod,
        });

        if (inputReportingPeriods.has(reportingPeriod)) {
          inputParams.add(contentJSON);
        }
        else {
          prepopParams.add(contentJSON);
        }
      }
    }
  }

  return {
    periods: Array.from(periods),
    categories: Array.from(categories),
    categoryGroups: Array.from(groups),
    attributes: Array.from(attributes),
    inputParams: Array.from(inputParams).map((inputParam) => JSON.parse(inputParam) as ISubmissionParam
    ),
    prepopParams: Array.from(prepopParams).map((prepopParam) => JSON.parse(prepopParam) as ISubmissionParam
    ),
    workbookCategoryData,
    workbookAttributeData,
  };
};

/**
 * Combine additional parameters to complete master value query parameters
 * @param prepopulationParams 
 * @param orgId 
 * @param programId 
 */
export const createMasterValueQueryList = (
  prepopulationParams: ISubmissionParam[],
  orgId: string,
  programId: string,
): Partial<IMasterValue>[] => prepopulationParams.map(
    (prepopulationParam) => ({
      ...prepopulationParam,
      orgId,
      programId,
    })
  )

import { IExcelState, IRows } from 'redux-spreadsheet/src/@types/state';
import { IRowToCategoryMap, ICategory, IColumnToAttributeMap, IDataElements, IWorkbookCategoryMap, IWorkbookAttributeMap } from "../@types";
import { createJSONParams } from "../utils";

const extractCategories = (
  rows: IRows,
  groupColumn: number,
  categoryColumn: number
) => {
  const categoryData: IRowToCategoryMap = {};
  const groups: Set<string> = new Set();
  const categories: Set<string> = new Set();

  for (let rowIndex in rows) {
    const row = rows[rowIndex];

    const data: ICategory = {};
    const groupCell = row[groupColumn];
    const categoryCell = row[categoryColumn];

    if (groupCell && groupCell.value) {
      const group = groupCell.value as string;
      data.group = group;
      groups.add(group);
    }

    if (categoryCell && categoryCell.value) {
      const category = categoryCell.value as string;
      data.category = category;
      categories.add(category);
    }

    if (data.category || data.group)
      categoryData[rowIndex] = data;
  }

  return { categoryData, groups, categories };
};

const extractAttributes = (
  rows: IRows,
  attributeColumn: number,
  inputReportingPeriods: Set<string>
) => {
  const attributeData: IColumnToAttributeMap = {};
  const attributes: Set<string> = new Set();
  const periods: Set<string> = new Set();
  const firstRow = rows[attributeColumn] || {};
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
    sheetCategories.groups.forEach((group) => groups.add(group));

    sheetAttributes.attributes.forEach((attribute) => attributes.add(attribute));
    sheetAttributes.periods.forEach((period) => periods.add(period));

    workbookCategoryData[sheetName] = sheetCategories.categoryData;
    workbookAttributeData[sheetName] = sheetAttributes.attributeData;

    for (let rowIndex in sheetCategories.categoryData) {
      const { category, group } = sheetCategories.categoryData[rowIndex];

      for (let columnIndex in sheetAttributes.attributeData) {
        const { attributeId, reportingPeriod } = sheetAttributes.attributeData[columnIndex];
        const contentJSON = createJSONParams({
          category,
          group,
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
    groups: Array.from(groups),
    attributes: Array.from(attributes),
    inputParams: Array.from(inputParams).map((inputParam) => JSON.parse(inputParam)
    ),
    prepopParams: Array.from(prepopParams).map((prepopParam) => JSON.parse(prepopParam)
    ),
    workbookCategoryData,
    workbookAttributeData,
  };
};

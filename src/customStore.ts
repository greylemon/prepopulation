import { undox } from 'undox';
import { createSampleSubmission } from './utils';
import { createActionIgnoreMap, createDefaultReducers, devTools } from 'redux-spreadsheet';
import { IExcelState } from 'redux-spreadsheet/src/@types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Use require to avoid need for types!
const { nSelectActiveSheetData, } = require('redux-spreadsheet') as any;

const SET_CATEGORY = (state: IExcelState, action: PayloadAction<any>): IExcelState => {
  const data = nSelectActiveSheetData(state);
  const activeCellPosition = state.activeCellPosition;

  const {
    categoryColumn,
    categoryGroupColumn,
    categoryHeaderColumn,
    categories,
    categoryGroups, 
    categoryGroupBehaviour
  } = action.payload;

  if (!data[activeCellPosition.y])
    data[activeCellPosition.y] = {};

    
  let rowOffset = 0
  const categoryGroup = categoryGroups[categoryGroups.length - 1]

  switch (categoryGroupBehaviour) {
    case 'current': 
      if (categoryGroup) {
        if (!data[activeCellPosition.y][categoryHeaderColumn])
          data[activeCellPosition.y][categoryHeaderColumn] = {}
    
        data[activeCellPosition.y][categoryHeaderColumn] = {
          type: 'text',
          value: categoryGroup.categoryGroupId.name,
          style: data[activeCellPosition.y][categoryHeaderColumn].style
        };
        
        rowOffset = 1
      }
      break
    case 'all':
      for (let i = 0; i < categoryGroups.length; i++) {
        if (!data[activeCellPosition.y + i])
          data[activeCellPosition.y + i] = {};
        if (!data[activeCellPosition.y + i][categoryHeaderColumn])
          data[activeCellPosition.y + i][categoryHeaderColumn] = {}
    
        data[activeCellPosition.y + i][categoryHeaderColumn] = {
          type: 'text',
          value: categoryGroups[i].categoryGroupId.name,
          style: data[activeCellPosition.y + i][categoryHeaderColumn].style
        }
      }

      rowOffset = categoryGroups.length
      break
    case 'none':
    default:
      break
  }

  for (let i = 0; i < categories.length; i++) {
    const row = i + activeCellPosition.y + rowOffset;
    if (!data[row])
      data[row] = {};

    if (!data[row][categoryColumn])
      data[row][categoryColumn] = {};

    if (!data[row][categoryHeaderColumn]) data[row][categoryHeaderColumn] = {}

    if (categoryGroup) {
      if (!data[row][categoryGroupColumn])
        data[row][categoryGroupColumn] = {};

        
      data[row][categoryGroupColumn] = {
        type: 'text',
        value: categoryGroup._id,
        style: data[row][categoryGroupColumn].style
      };
    }

    data[row][categoryColumn] = {
      type: 'text',
      value: categories[i].id,
      style: data[row][categoryColumn].style
    };

    data[row][categoryHeaderColumn] = {
      type: 'text',
      value: categories[i].name,
      style: data[row][categoryHeaderColumn].style
    };
  }

  return state;
};

const SET_ATTRIBUTE = (state: IExcelState, action: PayloadAction<any>): IExcelState => {
  const {
    attributeRow,
    attribute,
    reportingPeriod,
    attributeHeaderRow
  } = action.payload;

  const data = nSelectActiveSheetData(state);
  const activeCellPosition = state.activeCellPosition;

  if (!data[attributeRow]) data[attributeRow] = {}

  if (!data[attributeRow][activeCellPosition.x])
    data[attributeRow][activeCellPosition.x] = {}

  data[attributeRow][activeCellPosition.x] = {
    type: 'text',
    value: `${attribute.id}|${reportingPeriod.name}`,
    style: data[attributeRow][activeCellPosition.x].style
  }

  if (!data[attributeHeaderRow]) data[attributeHeaderRow] = {}
  if (!data[attributeHeaderRow][activeCellPosition.x]) data[attributeHeaderRow][activeCellPosition.x] = {}

  data[attributeHeaderRow][activeCellPosition.x] = {
    type: 'text',
    value: `${reportingPeriod.name} ${attribute.name}`,
    style: data[attributeHeaderRow][activeCellPosition.x].style
  }

  return state;
};

const ExcelStore = createSlice(
  {
    initialState: createSampleSubmission(),
    name: "EXCEL",
    reducers: {
      ...createDefaultReducers(),
      SET_CATEGORY,
      SET_ATTRIBUTE
    }
  }
);
export const ExcelStoreActions = ExcelStore.actions as any;
const UndoxExcelStore = undox(
  ExcelStore.reducer,
  undefined,
  undefined,
  { 
    ...createActionIgnoreMap(), 
    [ExcelStoreActions.SET_CATEGORY.type]: true,
    [ExcelStoreActions.SET_ATTRIBUTE.type]: true,
  }
);

export const customStore = configureStore(
  {
    reducer: UndoxExcelStore,
    devTools,
    middleware: [thunk]
  }
);

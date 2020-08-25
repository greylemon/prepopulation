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
    categories,
    categoryGroup, } = action.payload;

  if (!data[activeCellPosition.y])
    data[activeCellPosition.y] = {};

  if (categoryGroup) {
    if (!data[activeCellPosition.y][categoryColumn])
      data[activeCellPosition.y][categoryColumn] = {};
  
    data[activeCellPosition.y][categoryColumn] = {
      type: 'text',
      value: categoryGroup.categoryGroupId.name,
      style: data[activeCellPosition.y][categoryColumn].style
    };
  }

  for (let i = 0; i < categories.length; i++) {
    const row = i + activeCellPosition.y + 1;
    if (!data[row])
      data[row] = {};

    if (!data[row][categoryColumn])
      data[row][categoryColumn] = {};

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
  }

  return state;
};

const SET_ATTRIBUTE = (state: IExcelState, action: PayloadAction<any>): IExcelState => {
  const {
    attributeRow,
    attribute,
    reportingPeriod
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

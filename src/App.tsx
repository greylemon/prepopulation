import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { undox } from 'undox'

import { 
  createSampleSubmission
} from './utils'
import { Excel, createActionIgnoreMap, devTools, createDefaultReducers } from 'redux-spreadsheet'
import 'redux-spreadsheet/dist/main.cjs.css'
import { IExcelState } from 'redux-spreadsheet/src/@types'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const SET_CATEGORY = (state: IExcelState) => {
  // state.sheetsMap['Balance Sheet'] = {}
  // console.log(JSON.stringify(state.sheetsMap))
  return state
}

const ExcelStore = createSlice(
  { 
    initialState: createSampleSubmission(),
    name: "EXCEL",
    reducers: {
      ...createDefaultReducers(),
      SET_CATEGORY
    }
  }
)

const ExcelStoreActions = ExcelStore.actions as any

const UndoxExcelStore = undox(
  ExcelStore.reducer,
  undefined,
  undefined,
  { ...createActionIgnoreMap(), [ExcelStoreActions.SET_CATEGORY.type]: true }
)

const customStore = configureStore(
  {
    reducer: UndoxExcelStore,
    devTools,
    middleware: [thunk]
  }
)

const TemplateOptions = () => {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(ExcelStoreActions.SET_CATEGORY())
    },
    [dispatch]
  )

  
  return (
    <div>

    </div>
  )
}

const TemplateOptionsContainer = () => {
  return (
    <Provider store={customStore}>
      <TemplateOptions />
    </Provider>
  )
}

const App = () => {

  return (
    <div className="App">
      <TemplateOptionsContainer/>
      <Excel customStore={customStore} />
    </div>
  )
}

export default App
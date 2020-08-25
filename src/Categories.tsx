import { useDispatch } from "react-redux"
import { useState, useCallback } from "react"
import { sampleCategories, sampleCategoryGroup } from "./sample/category"
import { ExcelStoreActions } from "./customStore"
import React from "react"
import { CustomButton } from "./Components"

export const TemplateOptionsCategory = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState(
    sampleCategories
  )

  const [categoryGroup, setCategoryGroup] = useState(
    sampleCategoryGroup
  )

  const categoryColumn = 2
  const categoryGroupColumn = 1

  const handleClick = useCallback(
    () => {
      dispatch(ExcelStoreActions.SET_CATEGORY(
        {
          categoryColumn,
          categoryGroupColumn,
          categories,
          categoryGroup,
        }
      ))
    },
    [
      dispatch,
      categoryColumn,
      categoryGroupColumn,
      categories,
      categoryGroup,
    ]
  )

  
  return (
    <div>
      <CustomButton handleClick={handleClick}/>
    </div>
  )
}

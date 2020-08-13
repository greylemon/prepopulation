import { IMasterValue } from "../@types"

export const getHistoricalData = (
  masterValueQueryList: Partial<IMasterValue>[], 
  masterValues: IMasterValue[]
): IMasterValue[] => {
  const prepopulationData: IMasterValue[] = []

  masterValueQueryList.forEach(
    (query: any) => {
      const keys = Object.keys(query)
      masterValues.find(
        (masterValue: any) => {
          let isEqual = true

          for (let key of keys) {
            if (query[key] !== masterValue[key]) {
              isEqual = false
              break
            }
          }

          if (isEqual)
            prepopulationData.push(masterValue)
        }
      )
    }
  )

  return prepopulationData
}

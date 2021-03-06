import { IMasterValue } from "../@types"

/**
 * Mocks MongoDB's find method
 * @param masterValueQueryList 
 * @param masterValues 
 */
export const getHistoricalData = (
  masterValueQueryList: Partial<IMasterValue>[], 
  masterValues: IMasterValue[]
): IMasterValue[] => {
  const prepopulationData: IMasterValue[] = []

  masterValueQueryList.forEach(
    (query: any) => {
      const keys = Object.keys(query)
      const result = masterValues.find(
        (masterValue: any) => {
          let isEqual = true

          for (let key of keys) {
            if (query[key] !== masterValue[key]) {
              isEqual = false
              break
            }
          }

          return isEqual
        }
      )

      if (result)
        prepopulationData.push(result)
    }
  )

  return prepopulationData
}

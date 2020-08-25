export const sampleCategories = [
  {
    "_id" : "5f21bb33dfa35b3738fe1906",
    "name" : "LHIN Base Allocation",
    "id" : "44925",
    "COA" : "pa=81911*_71*&sa=11006",
  },
  {
    "_id" : "5f21bb33dfa35b3738fe1907",
    "name" : "LHIN/MOH One-time payments",
    "id" : "44926",
    "COA" : "pa=81911*_71*&sa=11012",
  },
  {
    "_id" : "5f21bb33dfa35b3738fe1908",
    "name" : "LHIN/MOH Recoveries",
    "id" : "44927",
    "COA" : "pa=81911*_71*&sa=11011",
  },      
  {
    "_id" : "5f21bb33dfa35b3738fe1909",
    "name" : "Other Revenue from MOHLTC",
    "id" : "44928",
    "COA" : "pa=81911*_715*&sa=11013_11015",
  }
]

export const sampleCategoryGroup =     {
  "_id" : "5f317ff73e994e3d8c1bbd3c",
  "categoryId" : sampleCategories.map((category) => category.id),
  "categoryGroupId" : {
    "_id": "5f317ff73e994e3d8c1bbd6c",
    "name": "Revenue"
  },
  "sheetNameId" : "5f1ee59ad181ae43d04c9bd6",
  "parentId" : "5f317fdf3e994e3d8c1bbd3a",
}
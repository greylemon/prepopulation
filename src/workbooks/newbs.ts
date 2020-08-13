import { IExcelState } from "redux-spreadsheet/src/@types/state";
import { EditorState, ContentState } from "draft-js";

export const newbsJSON: IExcelState = {
  "sheetNames": ["Balance Sheet"],
  "title": "Untitled spreadsheet",
  "isEditMode": false,
  "isSheetNavigationOpen": false,
  "isSheetNameEdit": false,
  "isSelectionMode": false,
  "isColumnDrag": false,
  "isRowDrag": false,
  "cellEditorState": EditorState.createEmpty(),
  "titleEditorState": EditorState.createWithContent(ContentState.createFromText('Untitled spreadsheet')),
  "activeSheetName": "Balance Sheet",
  "error": {},
  "selectionAreaIndex": -1,
  "activeCellPosition": { "x": 1, "y": 1 },
  "inactiveSelectionAreas": [],
  "sheetsMap": {
    "Balance Sheet": {
      "data": {
        "1": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": { "style": { "block": {}, "font": {} } },
          "5": {
            "style": { "block": {}, "font": {} },
            "value": "3|2017/18 YE",
            "type": "text"
          },
          "6": {
            "style": { "block": {}, "font": {} },
            "value": "3|2018/19 YE",
            "type": "text"
          },
          "7": {
            "style": { "block": {}, "font": {} },
            "value": "3|2019/20 YE",
            "type": "text"
          },
          "8": {
            "style": { "block": {}, "font": {} },
            "value": "3|2020/21 YE",
            "type": "text"
          }
        },
        "3": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "LHIN Program:  Revenue & Expenses",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "backgroundColor": "#CCFFFF",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "2017/18 Budget",
            "type": "text"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#CCFFFF",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "2018/19 Budget",
            "type": "text"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#CCFFFF",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "2019/20 Budget",
            "type": "text"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#CCFFFF",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "2020/21 Budget",
            "type": "text"
          },
          "9": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Comments\n",
            "type": "text"
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thick",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Change ?",
            "type": "text"
          }
        },
        "4": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Revenue",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "10": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          }
        },
        "5": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895618",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11006",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "LHIN Global Base Allocation",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "6": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895619",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11005",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "HBAM Funding (CCAC only)",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "7": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895620",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11004",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "Quality-Based Procedures (CCAC only)",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "8": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895621",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11008",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "LHIN One Time",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "9": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895622",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11012",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "MOHLTC One Time",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "10": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895623",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=110019",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Paymaster Flow Through (Row 80)",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "11": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Subtotal Revenue LHIN/MOHLTC",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(E5:E10)",
            "type": "formula"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(F5:F10)",
            "type": "formula"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(G5:G10)",
            "type": "formula"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(H5:H10)",
            "type": "formula"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "10": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "",
            "type": "text"
          }
        },
        "12": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895618",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=11*_12*_140*_150*_160*_19*_170*",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "Recoveries from External/Internal Sources",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "13": {
          "1": {
            "style": { "block": {}, "font": {} },
            "value": "5f17146b8907c161f4895618",
            "type": "text"
          },
          "2": {
            "style": { "block": {}, "font": {} },
            "value": "pa=13104_13106_14104_14106_15104to15107",
            "type": "text"
          },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "Donations",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thin",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": 0,
            "type": "number"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFFFCC",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": {}
            }
          },
          "10": {
            "style": {
              "block": {
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": {}
            },
            "value": "",
            "type": "text"
          }
        },
        "14": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "Subtotal Other Revenues",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(E12:E13)",
            "type": "formula"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(F12:F13)",
            "type": "formula"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(G12:G13)",
            "type": "formula"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(H12:H13)",
            "type": "formula"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "10": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "",
            "type": "text"
          }
        },
        "15": {
          "1": { "style": { "block": {}, "font": {} } },
          "2": { "style": { "block": {}, "font": {} } },
          "3": { "style": { "block": {}, "font": {} } },
          "4": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "thick",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "TOTAL REVENUE                               FUND TYPE 2",
            "type": "text"
          },
          "5": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(E11,E14)",
            "type": "formula"
          },
          "6": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(F11,F14)",
            "type": "formula"
          },
          "7": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(G11,G14)",
            "type": "formula"
          },
          "8": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderLeftStyle": "solid",
                "borderLeftWidth": "medium",
                "borderLeftColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thin",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "SUM(H11,H14)",
            "type": "formula"
          },
          "9": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "medium",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            }
          },
          "10": {
            "style": {
              "block": {
                "backgroundColor": "#FFCC99",
                "borderBottomStyle": "solid",
                "borderBottomWidth": "thin",
                "borderBottomColor": "#000000",
                "borderTopStyle": "solid",
                "borderTopWidth": "thin",
                "borderTopColor": "#000000",
                "borderRightStyle": "solid",
                "borderRightWidth": "thick",
                "borderRightColor": "#000000"
              },
              "font": { "fontWeight": "bold" }
            },
            "value": "",
            "type": "text"
          }
        }
      },
      "columnCount": 26,
      "rowCount": 200,
      "activeCellPosition": { "x": 9, "y": 2 },
      "freezeColumnCount": 0,
      "freezeRowCount": 0,
      "columnWidths": {
        "1": 24.85546875,
        "2": 41,
        "3": 6.7109375,
        "4": 47.140625,
        "5": 14.42578125,
        "6": 14.42578125,
        "7": 14.42578125,
        "8": 14.42578125
      },
      "hiddenColumns": {},
      "rowHeights": { "2": 15.75, "3": 45 },
      "hiddenRows": {},
      "inactiveSelectionAreas": []
    }
  },
  "results": {
    "Balance Sheet": {
      "11": { "5": 0, "6": 0, "7": 0, "8": 0 },
      "14": { "5": 0, "6": 0, "7": 0, "8": 0 },
      "15": { "5": 0, "6": 0, "7": 0, "8": 0 }
    }
  },
  "sheetNameText": "",
  "scrollOffset": { "x": 0, "y": 0 },
  "sheetDimensions": { "x": 0, "y": 0 },
  "dependentReferences": {
    "Balance Sheet": {
      "11": {
        "5": "kdtcmy8f",
        "6": "kdtcmy8m",
        "7": "kdtcmy8t",
        "8": "kdtcmy90"
      },
      "14": {
        "5": "kdtcmy97",
        "6": "kdtcmy9a",
        "7": "kdtcmy9d",
        "8": "kdtcmy9g"
      },
      "15": {
        "5": "kdtcmy9j",
        "6": "kdtcmy9m",
        "7": "kdtcmy9p",
        "8": "kdtcmy9s"
      }
    }
  },
  "dependentIndependentReferences": {
    "kdtcmy8f": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 5, "end": 5 },
            "yRange": { "start": 5, "end": 10 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy8m": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 6, "end": 6 },
            "yRange": { "start": 5, "end": 10 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy8t": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 7, "end": 7 },
            "yRange": { "start": 5, "end": 10 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy90": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 8, "end": 8 },
            "yRange": { "start": 5, "end": 10 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy97": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 5, "end": 5 },
            "yRange": { "start": 12, "end": 13 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy9a": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 6, "end": 6 },
            "yRange": { "start": 12, "end": 13 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy9d": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 7, "end": 7 },
            "yRange": { "start": 12, "end": 13 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy9g": {
      "Balance Sheet": {
        "areaRanges": [
          {
            "xRange": { "start": 8, "end": 8 },
            "yRange": { "start": 12, "end": 13 }
          }
        ],
        "positions": []
      }
    },
    "kdtcmy9j": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 5, "y": 11 },
          { "x": 5, "y": 14 }
        ]
      }
    },
    "kdtcmy9m": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 6, "y": 11 },
          { "x": 6, "y": 14 }
        ]
      }
    },
    "kdtcmy9p": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 7, "y": 11 },
          { "x": 7, "y": 14 }
        ]
      }
    },
    "kdtcmy9s": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 8, "y": 11 },
          { "x": 8, "y": 14 }
        ]
      }
    }
  },
  "independentReferences": {
    "Balance Sheet": {
      "5": {
        "5": "kdtcmy8g",
        "6": "kdtcmy8n",
        "7": "kdtcmy8u",
        "8": "kdtcmy91"
      },
      "6": {
        "5": "kdtcmy8h",
        "6": "kdtcmy8o",
        "7": "kdtcmy8v",
        "8": "kdtcmy92"
      },
      "7": {
        "5": "kdtcmy8i",
        "6": "kdtcmy8p",
        "7": "kdtcmy8w",
        "8": "kdtcmy93"
      },
      "8": {
        "5": "kdtcmy8j",
        "6": "kdtcmy8q",
        "7": "kdtcmy8x",
        "8": "kdtcmy94"
      },
      "9": {
        "5": "kdtcmy8k",
        "6": "kdtcmy8r",
        "7": "kdtcmy8y",
        "8": "kdtcmy95"
      },
      "10": {
        "5": "kdtcmy8l",
        "6": "kdtcmy8s",
        "7": "kdtcmy8z",
        "8": "kdtcmy96"
      },
      "11": {
        "5": "kdtcmy9k",
        "6": "kdtcmy9n",
        "7": "kdtcmy9q",
        "8": "kdtcmy9t"
      },
      "12": {
        "5": "kdtcmy98",
        "6": "kdtcmy9b",
        "7": "kdtcmy9e",
        "8": "kdtcmy9h"
      },
      "13": {
        "5": "kdtcmy99",
        "6": "kdtcmy9c",
        "7": "kdtcmy9f",
        "8": "kdtcmy9i"
      },
      "14": {
        "5": "kdtcmy9l",
        "6": "kdtcmy9o",
        "7": "kdtcmy9r",
        "8": "kdtcmy9u"
      }
    }
  },
  "independentDependentReferences": {
    "kdtcmy8g": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8h": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8i": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8j": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8k": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8l": { "Balance Sheet": { "11": { "5": true } } },
    "kdtcmy8n": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8o": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8p": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8q": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8r": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8s": { "Balance Sheet": { "11": { "6": true } } },
    "kdtcmy8u": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy8v": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy8w": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy8x": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy8y": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy8z": { "Balance Sheet": { "11": { "7": true } } },
    "kdtcmy91": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy92": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy93": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy94": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy95": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy96": { "Balance Sheet": { "11": { "8": true } } },
    "kdtcmy98": { "Balance Sheet": { "14": { "5": true } } },
    "kdtcmy99": { "Balance Sheet": { "14": { "5": true } } },
    "kdtcmy9b": { "Balance Sheet": { "14": { "6": true } } },
    "kdtcmy9c": { "Balance Sheet": { "14": { "6": true } } },
    "kdtcmy9e": { "Balance Sheet": { "14": { "7": true } } },
    "kdtcmy9f": { "Balance Sheet": { "14": { "7": true } } },
    "kdtcmy9h": { "Balance Sheet": { "14": { "8": true } } },
    "kdtcmy9i": { "Balance Sheet": { "14": { "8": true } } },
    "kdtcmy9k": { "Balance Sheet": { "15": { "5": true } } },
    "kdtcmy9l": { "Balance Sheet": { "15": { "5": true } } },
    "kdtcmy9n": { "Balance Sheet": { "15": { "6": true } } },
    "kdtcmy9o": { "Balance Sheet": { "15": { "6": true } } },
    "kdtcmy9q": { "Balance Sheet": { "15": { "7": true } } },
    "kdtcmy9r": { "Balance Sheet": { "15": { "7": true } } },
    "kdtcmy9t": { "Balance Sheet": { "15": { "8": true } } },
    "kdtcmy9u": { "Balance Sheet": { "15": { "8": true } } }
  },
  "sheetToIndependentDependentMap": {
    "Balance Sheet": {
      "kdtcmy8g": true,
      "kdtcmy8h": true,
      "kdtcmy8i": true,
      "kdtcmy8j": true,
      "kdtcmy8k": true,
      "kdtcmy8l": true,
      "kdtcmy8n": true,
      "kdtcmy8o": true,
      "kdtcmy8p": true,
      "kdtcmy8q": true,
      "kdtcmy8r": true,
      "kdtcmy8s": true,
      "kdtcmy8u": true,
      "kdtcmy8v": true,
      "kdtcmy8w": true,
      "kdtcmy8x": true,
      "kdtcmy8y": true,
      "kdtcmy8z": true,
      "kdtcmy91": true,
      "kdtcmy92": true,
      "kdtcmy93": true,
      "kdtcmy94": true,
      "kdtcmy95": true,
      "kdtcmy96": true,
      "kdtcmy98": true,
      "kdtcmy99": true,
      "kdtcmy9b": true,
      "kdtcmy9c": true,
      "kdtcmy9e": true,
      "kdtcmy9f": true,
      "kdtcmy9h": true,
      "kdtcmy9i": true,
      "kdtcmy9k": true,
      "kdtcmy9l": true,
      "kdtcmy9n": true,
      "kdtcmy9o": true,
      "kdtcmy9q": true,
      "kdtcmy9r": true,
      "kdtcmy9t": true,
      "kdtcmy9u": true
    }
  },
  "scrollHorizontal": "neutral",
  "scrollVertical": "neutral",
  "lastVisitedCell": { "x": 0, "y": 0 }
}

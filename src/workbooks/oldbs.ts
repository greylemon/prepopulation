import { IExcelState } from "redux-spreadsheet/src/@types/state";
import { EditorState, ContentState } from "draft-js";

export const oldbsJSON: IExcelState = {
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
            "value": "3|2016/17 YE",
            "type": "text"
          },
          "6": {
            "style": { "block": {}, "font": {} },
            "value": "3|2017/18 YE",
            "type": "text"
          },
          "7": {
            "style": { "block": {}, "font": {} },
            "value": "3|2018/19 YE",
            "type": "text"
          },
          "8": {
            "style": { "block": {}, "font": {} },
            "value": "3|2019/20 YE",
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
            "value": "2016/17 Budget",
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
            "value": "2017/18 Budget",
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
            "value": "2018/19 Budget",
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
            "value": "2019/20 Budget",
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
            "value": 5123,
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
            "value": 333,
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
            "value": 32,
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
            "value": 550,
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
            "value": 55,
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
            "value": 19,
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
            "value": 35,
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
            "value": 135,
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
      "activeCellPosition": { "x": 10, "y": 9 },
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
  "topLeftPosition": {
    "x": 1, "y": 1
  },
  "results": {
    "Balance Sheet": {
      "11": { "5": 0, "6": 0, "7": 0, "8": 6112 },
      "14": { "5": 0, "6": 0, "7": 0, "8": 170 },
      "15": { "5": 0, "6": 0, "7": 0, "8": 6282 }
    }
  },
  "sheetNameText": "",
  "scrollOffset": { "x": 0, "y": 0 },
  "dependentReferences": {
    "Balance Sheet": {
      "11": {
        "5": "kdtdekca",
        "6": "kdtdekch",
        "7": "kdtdekco",
        "8": "kdtdekcv"
      },
      "14": {
        "5": "kdtdekd2",
        "6": "kdtdekd5",
        "7": "kdtdekd8",
        "8": "kdtdekdb"
      },
      "15": {
        "5": "kdtdekde",
        "6": "kdtdekdh",
        "7": "kdtdekdk",
        "8": "kdtdekdn"
      }
    }
  },
  "dependentIndependentReferences": {
    "kdtdekca": {
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
    "kdtdekch": {
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
    "kdtdekco": {
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
    "kdtdekcv": {
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
    "kdtdekd2": {
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
    "kdtdekd5": {
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
    "kdtdekd8": {
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
    "kdtdekdb": {
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
    "kdtdekde": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 5, "y": 11 },
          { "x": 5, "y": 14 }
        ]
      }
    },
    "kdtdekdh": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 6, "y": 11 },
          { "x": 6, "y": 14 }
        ]
      }
    },
    "kdtdekdk": {
      "Balance Sheet": {
        "areaRanges": [],
        "positions": [
          { "x": 7, "y": 11 },
          { "x": 7, "y": 14 }
        ]
      }
    },
    "kdtdekdn": {
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
        "5": "kdtdekcb",
        "6": "kdtdekci",
        "7": "kdtdekcp",
        "8": "kdtdekcw"
      },
      "6": {
        "5": "kdtdekcc",
        "6": "kdtdekcj",
        "7": "kdtdekcq",
        "8": "kdtdekcx"
      },
      "7": {
        "5": "kdtdekcd",
        "6": "kdtdekck",
        "7": "kdtdekcr",
        "8": "kdtdekcy"
      },
      "8": {
        "5": "kdtdekce",
        "6": "kdtdekcl",
        "7": "kdtdekcs",
        "8": "kdtdekcz"
      },
      "9": {
        "5": "kdtdekcf",
        "6": "kdtdekcm",
        "7": "kdtdekct",
        "8": "kdtdekd0"
      },
      "10": {
        "5": "kdtdekcg",
        "6": "kdtdekcn",
        "7": "kdtdekcu",
        "8": "kdtdekd1"
      },
      "11": {
        "5": "kdtdekdf",
        "6": "kdtdekdi",
        "7": "kdtdekdl",
        "8": "kdtdekdo"
      },
      "12": {
        "5": "kdtdekd3",
        "6": "kdtdekd6",
        "7": "kdtdekd9",
        "8": "kdtdekdc"
      },
      "13": {
        "5": "kdtdekd4",
        "6": "kdtdekd7",
        "7": "kdtdekda",
        "8": "kdtdekdd"
      },
      "14": {
        "5": "kdtdekdg",
        "6": "kdtdekdj",
        "7": "kdtdekdm",
        "8": "kdtdekdp"
      }
    }
  },
  "independentDependentReferences": {
    "kdtdekcb": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekcc": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekcd": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekce": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekcf": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekcg": { "Balance Sheet": { "11": { "5": true } } },
    "kdtdekci": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekcj": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekck": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekcl": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekcm": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekcn": { "Balance Sheet": { "11": { "6": true } } },
    "kdtdekcp": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekcq": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekcr": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekcs": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekct": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekcu": { "Balance Sheet": { "11": { "7": true } } },
    "kdtdekcw": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekcx": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekcy": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekcz": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekd0": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekd1": { "Balance Sheet": { "11": { "8": true } } },
    "kdtdekd3": { "Balance Sheet": { "14": { "5": true } } },
    "kdtdekd4": { "Balance Sheet": { "14": { "5": true } } },
    "kdtdekd6": { "Balance Sheet": { "14": { "6": true } } },
    "kdtdekd7": { "Balance Sheet": { "14": { "6": true } } },
    "kdtdekd9": { "Balance Sheet": { "14": { "7": true } } },
    "kdtdekda": { "Balance Sheet": { "14": { "7": true } } },
    "kdtdekdc": { "Balance Sheet": { "14": { "8": true } } },
    "kdtdekdd": { "Balance Sheet": { "14": { "8": true } } },
    "kdtdekdf": { "Balance Sheet": { "15": { "5": true } } },
    "kdtdekdg": { "Balance Sheet": { "15": { "5": true } } },
    "kdtdekdi": { "Balance Sheet": { "15": { "6": true } } },
    "kdtdekdj": { "Balance Sheet": { "15": { "6": true } } },
    "kdtdekdl": { "Balance Sheet": { "15": { "7": true } } },
    "kdtdekdm": { "Balance Sheet": { "15": { "7": true } } },
    "kdtdekdo": { "Balance Sheet": { "15": { "8": true } } },
    "kdtdekdp": { "Balance Sheet": { "15": { "8": true } } }
  },
  "sheetToIndependentDependentMap": {
    "Balance Sheet": {
      "kdtdekcb": true,
      "kdtdekcc": true,
      "kdtdekcd": true,
      "kdtdekce": true,
      "kdtdekcf": true,
      "kdtdekcg": true,
      "kdtdekci": true,
      "kdtdekcj": true,
      "kdtdekck": true,
      "kdtdekcl": true,
      "kdtdekcm": true,
      "kdtdekcn": true,
      "kdtdekcp": true,
      "kdtdekcq": true,
      "kdtdekcr": true,
      "kdtdekcs": true,
      "kdtdekct": true,
      "kdtdekcu": true,
      "kdtdekcw": true,
      "kdtdekcx": true,
      "kdtdekcy": true,
      "kdtdekcz": true,
      "kdtdekd0": true,
      "kdtdekd1": true,
      "kdtdekd3": true,
      "kdtdekd4": true,
      "kdtdekd6": true,
      "kdtdekd7": true,
      "kdtdekd9": true,
      "kdtdekda": true,
      "kdtdekdc": true,
      "kdtdekdd": true,
      "kdtdekdf": true,
      "kdtdekdg": true,
      "kdtdekdi": true,
      "kdtdekdj": true,
      "kdtdekdl": true,
      "kdtdekdm": true,
      "kdtdekdo": true,
      "kdtdekdp": true
    }
  },
  "scrollHorizontal": "neutral",
  "scrollVertical": "neutral",
  "lastVisitedCell": { "x": 0, "y": 0 }
}

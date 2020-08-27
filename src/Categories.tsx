import { useDispatch } from "react-redux"
import { useState, useCallback, useEffect, useMemo, FunctionComponent, useRef, CSSProperties } from "react"
import { sampleCategories, sampleCategoryGroups, sampleCategoryTrees } from "./sample/category"
import { ExcelStoreActions } from "./customStore"
import React from "react"
import { CustomButton } from "./Components"
import { withStyles, emphasize, Chip, Breadcrumbs, Paper, Tabs, Tab, Tooltip } from "@material-ui/core"
import MaterialTable from "material-table"
import { NavigateNext } from "@material-ui/icons"
import { a11yProps, TabPanel } from "./TabPanel"
import Select from 'react-select'

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(3),
    color: 'white',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.primary.dark, 0.12),
    },
  },
}))(Chip)


export const CommonTable: FunctionComponent<
  {
    tableRef: any
    data: any
    handleSelectionChange?: any
  }
> = ({ tableRef, data, handleSelectionChange }) => {

  const columns = useMemo(
    () => [
      // { title: "id", field: "id" },
      { title: "ID", field: "id" }, 
      { title: "Name", field: "name" },
    ],
    []
  )


  const options = useMemo(() => ({ actionsColumnIndex: -1, showTitle: false, selection: true }), []);
  return (
    <MaterialTable 
      tableRef={tableRef}
      columns={columns} 
      data={data} 
      options={options}
      onSelectionChange={handleSelectionChange}
    />
  )
}

const CustomCommonTable = ({ data, handleClickRow }) => {

  const columns = useMemo(
    () => [
      // { title: "id", field: "id" },
      { title: "Name", field: "categoryGroupId.name" },
    ],
    []
  )

  const actions = useMemo(
    () => [
      {
        icon: 'save',
        tooltip: 'Apply',
        onClick: handleClickRow
      }
    ],
    [handleClickRow]
  )

  const options = useMemo(() => ({ actionsColumnIndex: -1, showTitle: false }), []);
  return (
    <MaterialTable 
      columns={columns} 
      data={data} 
      actions={actions} 
      options={options}
    />
  )
}

// Simulate mongodb population
const populateTree = (nodes: any[]) => nodes.map(
  (node) => {
    const replacedNode = { ...node }
    const foundGroup = sampleCategoryGroups.find((group) => group._id === node.categoryGroupId)

    if (foundGroup) {
      replacedNode.categoryGroupId = foundGroup as any
    } else {
      // HOTFIX
      replacedNode.categoryGroupId = { name: '|ERROR|' } as any
    }

    replacedNode.categoryId = replacedNode.categoryId.map(
      (id: string) => {
        const category = sampleCategories.find((category) => category._id === id)

        return category ? category : { name: '|ERROR|' } as any
      }
    )

    return replacedNode
  }
)

const getBaseNodes = () => populateTree(
  sampleCategoryTrees.filter(
    (node) => !node.parentId
  )
)

const getChildNodes = (parentId: any) => populateTree(
  sampleCategoryTrees.filter(
    (node) => node.parentId === parentId
  )
)

const NodeDisplay = (
  {
    nodeChain,
    handleClickChainNode,
  }
) => {
  return (
    <Paper style={{ 
      display: "flex", 
      flexFlow: "column", 
      justifyContent: "center", 
      minHeight: 50, 
      width: '100%',
      margin: '10px 0',
    }}>
       <div style={{ display: "flex", justifyContent: "center", padding: 5 }}>
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
          {
            nodeChain.map(
              (node: any, index: number) => (
                <Tooltip title="Remove node">
                  <StyledBreadcrumb 
                    key={`chain_${node._id}`} 
                    label={node.categoryGroupId.name} 
                    onClick={() => handleClickChainNode(index)} 
                  />
                </Tooltip>
              )
            )
          }
        </Breadcrumbs>
       </div>
    </Paper>
  )
}

export const TemplateOptionsCategory = () => {
  const tableRef = useRef()
  const dispatch = useDispatch()
  const [categoryNodes, setTreeNodes] = useState([])
  const [nodeChain, setNodeChain] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [categoryColumn, setCategoryColumn] = useState(2)
  const [categoryGroupColumn, setCategoryGroupColumn] = useState(1)
  const [categoryHeaderColumn, setCategoryHeaderColumn] = useState(4)
  const [tabValue, setTabValue] = useState(0)
  const [categoryGroupBehaviour, setCategoryGroupBehaviour] = useState('all')

  useEffect(
    () => {
      const fetchedCategoryColumn = 2
      const fetchedCategoryGroupColumn = 1
      const fetchedCategoryHeaderColumn = 4
      setCategoryColumn(fetchedCategoryColumn)
      setCategoryGroupColumn(fetchedCategoryGroupColumn)
      setCategoryHeaderColumn(fetchedCategoryHeaderColumn)
    },
    [
      setCategoryColumn,
      setCategoryGroupColumn,
      setCategoryHeaderColumn,
    ]
  )

  useEffect(
    () => {
      if (nodeChain.length) {
        setTreeNodes(getChildNodes((nodeChain[nodeChain.length - 1] as any)._id))
      } else {
        setTreeNodes(getBaseNodes())
      }

      if (tableRef.current) {
        // (tableRef as any).current.onAllSelected(true)
      }
      setCurrentCategories([])
    },
    [nodeChain, setTreeNodes, setCurrentCategories, tableRef]
  )

  const handleClick = useCallback(
    () => {
      if (nodeChain.length || currentCategories.length) {
        dispatch(ExcelStoreActions.SET_CATEGORY(
          {
            categoryColumn,
            categoryGroupColumn,
            categories: currentCategories,
            categoryGroups: nodeChain,
            categoryHeaderColumn,
            categoryGroupBehaviour,
          }
        ))
      }     
    },
    [
      dispatch,
      categoryColumn,
      categoryGroupColumn,
      currentCategories,
      categoryHeaderColumn,
      nodeChain,
      categoryGroupBehaviour,
    ]
  )

  const handleSelectNode = useCallback(
    (_, rowData) => {
      setNodeChain([...nodeChain, rowData])
    },
    [nodeChain, setNodeChain]
  )

  const handleClickChainNode = useCallback(
    (index) => {
      setNodeChain([
        ...nodeChain.slice(0, index)
      ])
    },
    [nodeChain, setNodeChain]
  )

  const availableCategories = useMemo(
    () => {
      let cats = []

      if (nodeChain.length) {
        cats = nodeChain[nodeChain.length - 1].categoryId
      } else {
        cats = sampleCategories
      }

      return cats
    },
    [nodeChain]
  )

  const handleChangeTab = useCallback(
    (_, newValue) => {
      setTabValue(newValue)
    },
    [setTabValue]
  )

  const handleSelectionChange = useCallback(
    (newCategories) => {
      setCurrentCategories(newCategories)
    },
    [setCurrentCategories]
  )

  const options = useMemo(
    () => [
      { value: 'none', label: 'None' },
      { value: 'current', label: 'Current' },
      { value: 'all', label: 'All' },
    ],
    []
  )

  const handleOptionChange = useCallback(
    (option) => {
      setCategoryGroupBehaviour(option.value)
    },
    [setCategoryGroupBehaviour]
  )

  return (
    <div>
      <NodeDisplay
        nodeChain={nodeChain}
        handleClickChainNode={handleClickChainNode}
      />
      <div style={{ marginBottom: 10 }}>
        <Chip style={{ marginBottom: 5, borderRadius: 2 }} label="Group Display Behaviour" color="primary" />
        <Select 
          placeholder="Select group behaviour"
          styles={{ menuPortal: (base: CSSProperties) => ({ ...base, zIndex: 9999 }) }}
          menuPortalTarget={document.body}
          options={options} 
          defaultValue={options[1]} 
          onChange={handleOptionChange}
        />
      </div>
      <Tabs style={{ marginBottom: 10 }} value={tabValue} onChange={handleChangeTab} aria-label="simple tabs example" centered>
        <Tab label="Tree" {...a11yProps(0)} />
        <Tab label="Category" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <CustomCommonTable data={categoryNodes} handleClickRow={handleSelectNode} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <CommonTable tableRef={tableRef} data={availableCategories} handleSelectionChange={handleSelectionChange} />
      </TabPanel>
      {
        (nodeChain.length !== 0 || currentCategories.length !== 0) && 
        <CustomButton handleClick={handleClick}/>
      }
    </div>
  )
}

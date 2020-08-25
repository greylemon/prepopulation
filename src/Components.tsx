import React, { FunctionComponent, useMemo } from "react";
import { Button } from "@material-ui/core";
import MaterialTable from "material-table";

export const CustomButton: FunctionComponent<{ text?: string, handleClick: any }> = ({ text, handleClick }) => (
  <Button 
    style={{ marginTop: 10 }}
    variant="contained" 
    color="primary" 
    onClick={handleClick} 
    fullWidth
  >
    {text || 'Apply'}
  </Button>
)

export const CommonTable = ({ data, handleClickRow }) => {

  const columns = useMemo(
    () => [
      // { title: "id", field: "id" },
      { title: "Name", field: "name" },
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
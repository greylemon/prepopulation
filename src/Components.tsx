import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";

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
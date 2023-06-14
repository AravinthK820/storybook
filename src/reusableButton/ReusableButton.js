import React from "react";
import Button from '@mui/material/Button';

const CustomizedButton = (props) => {
  const {buttonProps, styles} = props
  const iconStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      
        <Button
          onClick={buttonProps.onClick}
          disabled={buttonProps.disabled}
          className={styles}
        >
          {buttonProps.startIcon && (
            <span style={iconStyles}>{buttonProps.startIcon}</span>
          )}
          <span>{buttonProps.text}</span>
          {buttonProps.endIcon && <span style={iconStyles}>{buttonProps.endIcon}</span>}
        </Button>
   
    </>
  );
};

export default CustomizedButton;
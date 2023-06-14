
import React from 'react';
import CustomizedButton from './ReusableButton'
import buttonData from './Buttondata';
import { useStyles } from './ButtonStyles';

export default {
  title: 'ReusableButton',
  component: CustomizedButton,
};

export const PrimaryButtonNormal = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj5} styles={classes.customButton5} /> 
  );
};

export const PrimaryButtonCondensed = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj2} styles={classes.customButton1} /> 
  );
};

export const SecondaryButtonNormal = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj3} styles={classes.customButton2} />
  );
};

export const SecondaryButtonCondensed = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj4} styles={classes.customButton3} />
  );
};

export const TertiaryNormal = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj5} styles={classes.customButton4} />
  );
};

export const TertiaryCondensed = () => {
  const classes = useStyles();
  return (
    <CustomizedButton buttonProps={buttonData.obj6} styles={classes.customButton6} />
  );
};

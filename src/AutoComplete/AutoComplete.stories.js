import React from "react";
import AutoComplete from "./AutoComplete"


export default {
    title:'Form/AutoComplete',
   
   
    
}   

  
const countries = [
    {value:'Afghanistan',label:'Afghanistan'}, {value:'Albania',label:'Albania'}, {value:'Algeria',label:'Algeria'}, {value:'Andorra',label:'Andorra'},

    {value:'Angola',label:'Angola'},  {value:'Antigua and Barbuda',label:'Antigua and Barbuda'},  {value:'Argentina',label:'Argentina'},  {value:'Armenia',label:'Armenia'},  {value:'Austria',label:'Austria'},  {value:'Azerbaijan',label:'Azerbaijan'},  {value:'Bangladesh',label:'Bangladesh'}, 
    {value:'Barbados',label:'Barbados'},    {value:'Belarus',label:'Belarus'},    {value:'Belgium',label:'Belgium'},    {value:'Bolivia',label:'Bolivia'},    {value:'Brazil',label:'Brazil'},
  ];




const Template=args=><AutoComplete {...args}/>

export const BothIcons=Template.bind({})
BothIcons.args={
    option:countries,
    add:true,
    variant:"standard",
    scrollVisible:true,
    add:true,
    value:'567780987654',
    classProperties:{margin:'25px',width:'50%'},
    dropDownStyle:{width:"95%"},
    variant:"outlined",
    showStartAdornment:true,showEndAdornment:true,  variant:"standard",mandatory:false
    
}

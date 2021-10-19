import React from 'react';
import Chart from "./Chart";

const ExpenseChart = (props) =>{
 const details=[{label:"Jan" , value:0},
 {label:"Feb" , value:0},
 {label:"Mar" , value:0},
 {label:"Apr" , value:0},
 {label:"May" , value:0},
 {label:"Jun" , value:0},
 {label:"Jul" , value:0},
 {label:"Aug" , value:0},
 {label:"Sep" , value:0},
 {label:"Oct" , value:0},
 {label:"Nov" , value:0},
 {label:"Dec" , value:0}];
 let maxValue=0;
 props.filterDetails.forEach(element => {
     details[element.date.getMonth()].value=details[element.date.getMonth()].value+parseInt(element.amount);
     maxValue=Math.max(maxValue,details[element.date.getMonth()].value);
 });
 

    return <Chart details={details} maxValue={maxValue}></Chart>
}
export default ExpenseChart;
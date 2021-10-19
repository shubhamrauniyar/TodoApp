import React from 'react';
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart=(props)=>{
    console.log(props.maxValue)
return <div className="chart">
    {props.details.map(level=>{
        return <ChartBar key={level.label} value={level.value} maxValue={props.maxValue} label={level.label}></ChartBar>
    })}

</div>
}

export default Chart;
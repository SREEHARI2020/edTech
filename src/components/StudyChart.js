import React from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
import '../assets/css/StudyChart.css'

const StudyChart = ({values,time,labels,title,colors}) => {
  
  const hours=Math.floor(time/60)
  const minutes=time%60

    const state = {

    
 
        labels:labels,
        datasets: [
          {
            label: 'Study Data',
            backgroundColor:colors,
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: values
          }
        ]
      }
    return (
        <div className="donut-chart">
            
                 

             <Doughnut

className="donut-chart-body-chart"

    data={state}

height={300}
width={300}

    options={{

cutout:"80%",
maintainAspectRatio: false ,
title:{
display:true,
text:'Average Rainfall per month',
fontSize:20
},
legend:{
display:true,
position:'right'
},

}}
/>

<div className="donut-center-text"> <span >{title}</span>  <div>{hours>0?hours+"h"  :""} {minutes} min</div></div>
            
        </div>
    )
}

export default StudyChart

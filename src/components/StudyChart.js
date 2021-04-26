import React from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
import '../assets/css/StudyChart.css'

const StudyChart = () => {
  

    const state = {
 
        labels: ['Class', 'Study', 'Freetime',
                 ],
        datasets: [
          {
            label: 'Study Data',
            backgroundColor: [
              '#2D82FE',
              '#FF9E57',
              '#2fed51',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [65, 59, 80,]
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

<div className="donut-center-text"> <span >Total</span>  <div>2h 10 min</div></div>
            
        </div>
    )
}

export default StudyChart

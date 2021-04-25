import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData,fetchDataApi} from '../redux/action'
import  '../assets/css/Home.css'
import StudyChart from './StudyChart';
import ProgressBar from './ProgressBar';
import Devices from './Devices';

const Home = () => {
    const dispatch = useDispatch();
    const array = useSelector(state => state.data)

  

    useEffect(() => {
       const fetchApi=async ()=>
        {

            await dispatch((fetchDataApi()))
        }
        fetchApi();

        
    }, [])
    return (
        <div className="home-page-container">
          

           {/* {array.length?array.map(item=>(item.chartData.totalTime.total)):''} */}
         {/* {array.length?array[0].chartData.totalTime.total:''} */}
          {console.log(array) } 



           <div  className="home-page-header">

               <p className="home-page-header-text">Activities Summary</p>

               <div className="home-page-header-popup" >
                   <p > all</p>
               </div>

           </div>

           
           <div  className="home-page-body">

               <div className="home-page-body-chart-container">  
                <h3>ALL Screen Time</h3>
                <StudyChart/>
               </div>


               <div className="home-page-body-chart-progressbar-container">
               <h3>Free Time Usage</h3>
                  <ProgressBar/>
            
               </div>

               <div className="home-page-body-chart-devices-container">
               <h3>By Devices</h3>
                  <Devices/>
            
               </div>

           </div>


        
        </div>
    )
}

export default Home

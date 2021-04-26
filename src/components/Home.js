import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData,fetchDataApi} from '../redux/action'
import  '../assets/css/Home.css'
import StudyChart from './StudyChart';
import ProgressBar from './ProgressBar';
import Devices from './Devices';

import Modal from 'react-modal';
import { Button } from '@material-ui/core';

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selected, setSelected] = useState("All");
    const [activities, setActivities] = useState([
        {
            name:"All",
            text:"Activities during class time,study time and play time are shown",
           
        },
        {
            name:"Class-time only",
            text:"Only the activities during the times you scheduled as class-time are shown",
           
        },
        {
            name:"Study-time only",
            text:"Only the activities during the times you scheduled as study-time or when manually switched to study-mode from the mode page are shown",
           
        },
        {
            name:"Free-time only",
            text:"Only the activities during the times you scheduled as free-time or when manually switched to free-mode from the mode page are shown",
           
        },
    ]);
    const dispatch = useDispatch();
    const array = useSelector(state => state.data)

  

    useEffect(() => {
       const fetchApi=async ()=>
        {

            await dispatch((fetchDataApi()))
        }
        fetchApi();

        
    }, [])
   const  handleSelectedChange=(name,e)=>{
    e.stopPropagation();
    setSelected(name)
   setModalIsOpen(false)

    }
    return (
        <div className="home-page-container">
          


           {/* {array.length?array.map(item=>(item.chartData.totalTime.total)):''} */}
         {/* {array.length?array[0].deviceUsage.totalTime.mobile:''} */}
          {console.log(array) } 



           <div  className="home-page-header">

               <p className="home-page-header-text">Activities Summary</p>

               <div className="home-page-header-popup" >
                   <Button  onClick={()=>setModalIsOpen(true)}variant="outlined" color="primary" > {selected}</Button>
               </div>

           </div>

           
           <div  className="home-page-body">

               <div className="home-page-body-chart-container">  
                <h3>{selected==="All"?"ALL Screen Time":selected.replace("only","")}</h3>
                {selected==="All"?<StudyChart values= {array.length?[array[0].chartData.classTime.total,array[0].chartData.studyTime.total,array[0].chartData.freeTime.total  ]:''} 
                            time={array.length?array[0].chartData.totalTime.total:''}  
                            labels={['Class', 'Study', 'Freetime',]}
                            title="Total"
                            colors={[ '#2D82FE', '#FF9E57','#2fed51', ]}
                           
                           
                        
                            />:''}
                {selected==="Class-time only"?<StudyChart values= {array.length?[array[0].chartData.classTime.total, array[0].chartData.totalTime.total ]:''} 
                             time={array.length?array[0].chartData.classTime.total:''}  
                            labels={['Class', 'Total',]}
                            title="Class"
                            colors={[ '#2D82FE', '#8d8d8d', ]}                           
                        
                            />:''}
                {selected==="Study-time only"?<StudyChart values= {array.length?[array[0].chartData.studyTime.total, array[0].chartData.totalTime.total ]:''} 
                            time={array.length?array[0].chartData.studyTime.total:''}  
                            labels={[ 'Study', 'Total',]}
                            title="Study"
                            colors={[ ' #FF9E57','#8d8d8d', ]}                        
                            />:''}
                {selected==="Free-time only"?<StudyChart values= {array.length?[array[0].chartData.freeTime.total, array[0].chartData.totalTime.total ]:''} 
                                                        time={array.length?array[0].chartData.freeTime.total:''}  

                            labels={[ 'Freetime','Total']}
                            title="Free"
                            colors={[ '#2fed51', '#8d8d8d']}                        
                            />:''}
               </div>


              {selected==="All" || selected==="Free-time only"? <div className="home-page-body-chart-progressbar-container">
               <h3>Free Time Usage</h3>
                  <ProgressBar  time={array.length?array[0].chartData.freeTime.total:''} 
                  total={array.length?array[0].chartData.totalTime.total:''} 


                   
                  
                  
                  />
            
               </div>:""}

               <div className="home-page-body-chart-devices-container">
               <h3>By Devices</h3>
               {selected==="All"?<Devices  
               mobile={array.length?array[0].deviceUsage.totalTime.mobile:''} 
               laptop={array.length?array[0].deviceUsage.totalTime.laptop:''} 
               
               />  :""}
               {selected==="Class-time only"?<Devices
                 mobile={array.length?array[0].deviceUsage.classTime.mobile:''} 
                 laptop={array.length?array[0].deviceUsage.classTime.laptop:''} 
               /> :""}
               {selected==="Study-time only"?<Devices
                mobile={array.length?array[0].deviceUsage.studyTime.mobile:''} 
                laptop={array.length?array[0].deviceUsage.studyTime.laptop:''} 
               /> :""}
               {selected==="Free-time only"?<Devices
                mobile={array.length?array[0].deviceUsage.freeTime.mobile:''} 
                laptop={array.length?array[0].deviceUsage.freeTime.laptop:''} 
               /> :""}
            
               </div>

           </div>


           <Modal isOpen={modalIsOpen} className="Modal"  onRequestClose={()=>setModalIsOpen(false)}  >
               <div className="Modal-header"> 
               <h2>Activities during which time is shown ?</h2>

               <div className="modal-body-wrapper">
               {activities.map(item=>(
                    <div className="modal-body">
                   <div className="modal-body-header">{item.name}</div>
                   <div className="modal-body-text"  
                   
                   >
                   <label for={item.name} className="modal-body-text-label">{item.text} </label>
                   <input id={item.name} type="radio" name="activities" value={selected} onChange={(e)=> handleSelectedChange(item.name,e)} />
                    </div>
                   </div>
               ))}
                </div>
                </div>

                </Modal>

        
        </div>
    )
}

export default Home

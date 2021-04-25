import {FETCH_DATA} from './actionTypes'
import axios from 'axios'

 export const fetchData =(value)=>{
    return{
        type:FETCH_DATA,
       payload:value
    }

}

export const fetchDataApi=()=>{
    return (dispatch)=>{
        axios.get("https://api.mocklets.com/mock68182/screentime")
        .then(response=>{
            const userData=response.data

            dispatch(fetchData(userData))
        })
        .catch(error=>{
            const errorMsg=error.message
        })

    }
}
import {FETCH_DATA} from './actionTypes'

const initialState={

    data:[1,2,3]
}

const fetchReducer=(state=initialState,action)=>{
    
    switch (action.type) {
        case FETCH_DATA:
            return {...state,data:action.payload}
            
           
    
        default:
           return state
    }

}

export default fetchReducer
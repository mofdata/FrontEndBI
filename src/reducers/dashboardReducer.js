import {TEST_DISPATCH} from '../actions/types'
const initialState={
    user:{}
}

export default function(state=initialState,action){
    switch(action.type){
        default:
        case TEST_DISPATCH:
        return{
            ...state,
            dashboard:action.payload
        }
    }
}
import {TEST_DISPATCH} from './types';
export const dashboard=(dashboards)=>{
    return{
        type:TEST_DISPATCH,
        payload:dashboards
    }
}
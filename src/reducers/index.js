import {combineReducers} from 'redux';
import dashboard from './dashboardReducer';
import global from './globalReducer'

export default combineReducers({
    dashboard,
    global
});
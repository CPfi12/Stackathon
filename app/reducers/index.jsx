import { combineReducers } from 'redux';
import campuses from './campusReducer';
import students from './studentsReducer';


export default combineReducers({campuses,students});
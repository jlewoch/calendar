import { combineReducers } from 'redux';

// reducers
import calendar from './calendar/reducer';
const rootReducer = combineReducers({ calendar });

export default rootReducer;

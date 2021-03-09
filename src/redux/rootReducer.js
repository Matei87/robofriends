import { combineReducers } from 'redux';
import { searchRobots, requestRobots } from './Reducers/reducers';

const rootReducer = combineReducers({
    searchRobots: searchRobots,
    requestRobots: requestRobots
})
export default rootReducer;
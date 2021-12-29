import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import applicationReducer from './applicationReducer';

export default combineReducers({
  page: pageReducer,
  application: applicationReducer
});                                      
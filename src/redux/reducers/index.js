import count from './count'
import person from './person';
import { combineReducers } from 'redux';
//reducers的合并
export const Allreducer = combineReducers({
  count,
  person
})
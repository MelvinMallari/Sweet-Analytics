import { combineReducers } from 'redux';
import session from './root_reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;
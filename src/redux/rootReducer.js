import { combineReducers } from 'redux';
import userReducers from './Users/UsersReducer';

const rootReducer = combineReducers({
  usersData: userReducers,
});

export default rootReducer;

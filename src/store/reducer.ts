import { combineReducers } from 'redux';
import trendingReducer from './trending';
import userReducer from './user';

const reducer = combineReducers({
  trending: trendingReducer,
  user: userReducer,
});

export default reducer;

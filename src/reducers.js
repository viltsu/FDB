
import { combineReducers } from 'redux';
import { quotes } from './pages/quote/reducer';

const rootReducer = combineReducers({
  quotes
});

export default rootReducer;
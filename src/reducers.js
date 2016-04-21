
import { combineReducers } from 'redux';
import { quotes } from './pages/quote/reducer';
import { weather } from './pages/weather/reducer';

const rootReducer = combineReducers({
  quotes,
  weather
});

export default rootReducer;
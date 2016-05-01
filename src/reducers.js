
import { combineReducers } from 'redux';
import { quotes } from './pages/quote/reducer';
import { weather } from './pages/weather/reducer';
import { transportation } from './pages/transportation/reducer';

const rootReducer = combineReducers({
  quotes,
  weather,
  transportation
});

export default rootReducer;
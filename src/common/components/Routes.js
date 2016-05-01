import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './App';
import CalendarPage from '../../pages/calendar/page';
import QuotePage from '../../pages/quote/page';
import WeatherPage from '../../pages/weather/page';
import TransportationPage from '../../pages/transportation/page';

const routes = [
  '/calendar',
  '/quote',
  '/weather',
  '/transportation'
];

/*
var idx = 0;
var changer = setInterval(function() {
  idx++;
  if (idx >= routes.length) {
    idx = 0;
  }
  browserHistory.push(routes[idx]);
}, 10000);
*/

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WeatherPage} />
    <Route path="calendar" component={CalendarPage} />
    <Route path="quote" component={QuotePage} />
    <Route path="weather" component={WeatherPage} />
    <Route path="transportation" component={TransportationPage} />
  </Route>
);

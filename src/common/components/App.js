import React from 'react';
import { Link } from 'react-router';


export default ({children}) => {
  return (
    <div id="container">
      <ul id="navigation">
        <li><Link to="/quote">Quote</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/transportation">Transportation</Link></li>
      </ul>
      {children}
    </div>
  );
}

import fetch from 'isomorphic-fetch'
import {FORECAST_URL, RAIN_MAP_URL} from '../../../settings.local.js';

export const FETCH_MAPS = 'FETCH_MAPS';
export const RECEIVE_MAPS = 'RECEIVE_MAPS';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const NEXT_MAP = 'NEXT_MAP';
export const GET_MAP = 'GET_MAP';

function fetchMaps() {
  return {
    type: FETCH_MAPS
  }
}

function receiveMaps(data) {
  return {
    type: RECEIVE_MAPS,
    maps: data.reverse()
  }
}

function receiveForecast(data) {
  return {
    type: RECEIVE_FORECAST,
    forecast: data
  }
}

export function refreshMaps() {
  
  return function (dispatch) {
    dispatch(fetchMaps());

    fetch(FORECAST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receiveForecast(responseData));
      });

    return fetch(RAIN_MAP_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receiveMaps(responseData));
      });
  };
}

export function nextMap() {
  return function(dispatch) {
    dispatch(
      {
        type: NEXT_MAP
      }
    );    
  }
}

export function getMap(index) {
  return function (dispatch) {
    dispatch({
      type: GET_MAP,
      index: index
    });
  }
}

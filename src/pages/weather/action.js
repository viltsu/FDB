import fetch from 'isomorphic-fetch'

export const FETCH_MAPS = 'FETCH_MAPS';
export const RECEIVE_MAPS = 'RECEIVE_MAPS';
export const NEXT_MAP = 'NEXT_MAP';
export const GET_MAP = 'GET_MAP';

const WEATHER_URL = 'http://localhost:3000/api/RainMaps';

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

export function refreshMaps() {
  
  return function (dispatch) {
    dispatch(fetchMaps());

    return fetch(WEATHER_URL)
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

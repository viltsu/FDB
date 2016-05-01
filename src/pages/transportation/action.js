import fetch from 'isomorphic-fetch'
import { TRAIN_URL } from '../../../settings.local.js';

export const FETCH_TRAIN = 'FETCH_TRAIN';
export const RECEIVE_TRAIN = 'RECEIVE_TRAIN';

function requestTrains() {
  return {
    type: FETCH_TRAIN
  }
}

function receiveTrains(data) {
  return {
    type: RECEIVE_TRAIN,
    trains: data
  }
}

console.log(TRAIN_URL);

export function fetchTrains() {
  
  return function (dispatch) {
    dispatch(requestTrains());

    return fetch(TRAIN_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receiveTrains(responseData));
      });
  };

}

import fetch from 'isomorphic-fetch'
import {QUOTE_URL} from '../../../settings.local.js';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';



function requestQuote() {
  return {
    type: FETCH_QUOTE
  }
}

function receiveQuote(data) {
  return {
    type: RECEIVE_QUOTE,
    quote: data
  }
}

export function fetchQuotes() {
  
  return function (dispatch) {
    dispatch(requestQuote());

    return fetch(QUOTE_URL + '/random')
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receiveQuote(responseData));
      });
  };

}

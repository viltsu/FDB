import fetch from 'isomorphic-fetch'

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

const URL = 'http://localhost:3000/api/Quotes';

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

    return fetch(URL + '/' + (Math.floor(Math.random() * 2) + 1))
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receiveQuote(responseData));
      });
  };

}

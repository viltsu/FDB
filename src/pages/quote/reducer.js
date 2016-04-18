import {FETCH_QUOTE, RECEIVE_QUOTE} from './action'

const initState = {
  quote: '',
  by: '',
  img: '',
  loading: false
};

export function quotes(state = initState, action) {
  switch (action.type) {
    case RECEIVE_QUOTE: {
      return {
        quote: action.quote.quote,
        by: action.quote.by,
        img: action.quote.img,
        loading: false
      }
    }
    case FETCH_QUOTE: {
      return Object.assign({}, state, {loading: true})
    }
    default: {
      return state;
    }
  }
}
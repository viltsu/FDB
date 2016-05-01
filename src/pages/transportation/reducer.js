import {FETCH_TRAIN, RECEIVE_TRAIN} from './action'

const initState = {
  trains: [],
  loading: false
};

export function transportation(state = initState, action) {
  switch (action.type) {
    case RECEIVE_TRAIN: {
      return {
        trains: action.trains,
        loading: false
      }
    }
    case FETCH_TRAIN: {
      return Object.assign({}, state, {loading: true})
    }
    default: {
      return state;
    }
  }
}
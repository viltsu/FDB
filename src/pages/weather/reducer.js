import {
  FETCH_MAPS,
  RECEIVE_MAPS,
  RECEIVE_FORECAST,
  NEXT_MAP,
  GET_MAP
} from './action'

const initState = {
  maps: [],
  active: -1,
  loading: false
};

export function weather(state = initState, action) {
  switch (action.type) {
    case RECEIVE_FORECAST: {
      return Object.assign({}, state, {
        forecast: action.forecast
      })
    }
    case RECEIVE_MAPS: {
      return Object.assign({}, state, {
        maps: action.maps,
        active: 0,
        loading: false
      });
    }
    case FETCH_MAPS: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case NEXT_MAP: {
      if (state.active < 0) {
        return Object.assign({}, state)
      }
      var nextPost = state.active + 1;
      if (state.maps.length <= nextPost) {
        nextPost = 0;
      }
      return Object.assign({}, state, {active: nextPost})
    }
    case GET_MAP:
      var imgIndex = action.index;
      if (state.maps.length <= imgIndex) {
        imgIndex = 0;
      }
      return Object.assign({}, state, {active: imgIndex})
    default: {
      return state;
    }
  }
}
import { SET_ERROR, RESET_ERROR, RESET_LOADING, SET_LOADING } from "../actions/types";
const initialState = {
  loading: false,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case RESET_ERROR:
      return {
        ...state,
        error: {}
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

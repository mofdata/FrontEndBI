import { GET_EXPENDITURE } from "../actions/types";
const initialState = {
  expenditure: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENDITURE:
      return {
        ...state,
        expenditure: action.payload
      };
    default:
      return state;
  }
}

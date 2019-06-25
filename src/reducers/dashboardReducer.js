import { GET_EXPENDITURE,GET_BUDGET } from "../actions/types";
const initialState = {
  budget: [],
  expenditure:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENDITURE:
      return {
        ...state,
        expenditure: action.payload
      };
      case GET_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    default:
      return state;
  }
}

import {
  GET_EXPENDITURE,
  SET_ERROR,
  SET_LOADING,
  RESET_LOADING
} from "./types";
import axios from "../utils/request";

export const setLoading = () => ({
  type: SET_LOADING
});

export const resetLoading = () => ({
  type: RESET_LOADING
});

export const getExpenditure = () => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const expenditure = await axios.get("/api/v1/expenditure");

      dispatch({
        type: GET_EXPENDITURE,
        payload: expenditure.data
      });
      resolve();
    } catch (err) {
      console.log({ getExpenditureError: err })
      dispatch({
        type: SET_ERROR,
        payload: { getExpenditureError: err.message }
      });
      // reject({ expenditureError: err });
      resolve();
    }
  });

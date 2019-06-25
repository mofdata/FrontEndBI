import {
  GET_EXPENDITURE,
  SET_ERROR,
  SET_LOADING,
  RESET_LOADING,
  GET_BUDGET,
  GET_BDDR
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
      console.log({ getExpenditureError: err });
      dispatch({
        type: SET_ERROR,
        payload: { getExpenditureError: err.message }
      });
      // reject({ expenditureError: err });
      resolve();
    }
  });

export const getBudget = () => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const budget = await axios.get("/api/v1/budget");
      // console.log(budget);
      dispatch({
        type: GET_BUDGET,
        payload: budget.data
      });
      resolve();
    } catch (err) {
      // console.log({ getExpenditureError: err })
      dispatch({
        type: SET_ERROR,
        payload: { getBudgetError: err.message }
      });
      // reject({ expenditureError: err });
      resolve();
    }
  });

  export const getBddr = () => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const bddr = await axios.get("/api/v1/bddr");
      // console.log(budget);
      dispatch({
        type: GET_BDDR,
        payload: bddr.data
      });
      resolve();
    } catch (err) {
      // console.log({ getExpenditureError: err })
      dispatch({
        type: SET_ERROR,
        payload: { getExpenditureError: err.message }
      });
      // reject({ expenditureError: err });
      resolve();
    }
  });

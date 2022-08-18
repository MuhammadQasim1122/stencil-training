import { Actions } from './index';
import API from '../assets/API';
export function loadData() {
  return async (dispatch) => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(loadDataBegin());
    try {
      const response: any = await API.post('./assets/test-data.json');
      // Trigger the LOAD_DATA_SUCCESS action
      dispatch(loadDataSuccess(response.items));
      return response.items;
    } catch (error) {
      // Trigger the LOAD_DATA_FAILURE action
      dispatch(loadDataFailure(error));
    }
  };
}

// ACTIONS
export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
}
export const loadDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN,
  });
};
export interface LoadDataSuccessAction {
  type: Actions.LOAD_DATA_SUCCESS;
  payload: any;
}
export const loadDataSuccess = (data) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_SUCCESS,
    payload: { data },
  });
};
export interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}
export const loadDataFailure = (error) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_FAILURE,
    payload: { error },
  });
};
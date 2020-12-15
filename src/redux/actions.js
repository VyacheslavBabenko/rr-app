import { CREATE_ROUTE, DELETE_ROUTE, HIDE_ALERT, SHOW_ALERT } from "./types";

export function createRoute(route) {
  return {
    type: CREATE_ROUTE,
    payload: route
  };
}

export function deleteRoute(id) {
  return {
    type: DELETE_ROUTE,
    payload: id
  };
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}

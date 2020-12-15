import { CREATE_ROUTE, DELETE_ROUTE } from "./types";

const initialState = {
  routes: [
    {
      route: "/main",
      title: "Main",
      id: 1
    }
  ]
};

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUTE:
      return { ...state, routes: state.routes.concat(action.payload) };
    case DELETE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(r => r.id !== action.payload)
      };
    default:
      return state;
  }
};

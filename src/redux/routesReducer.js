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
      let editedRoutes = state.routes.filter(r => r.id !== action.payload.id);
      let pathPage = action.payload.route.split("/").reverse()[0];

      editedRoutes.forEach(el => {
        if (el.route.includes(action.payload.route)) {
          el.route = el.route
            .split("/")
            .filter(el => el !== pathPage)
            .join("/");
        }
      });

      return {
        ...state,
        routes: editedRoutes
      };
    default:
      return state;
  }
};

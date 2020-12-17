import { CREATE_ROUTE, DELETE_ROUTE } from "./types";

const initialState = {
  routes: [
    {
      route: "/main",
      title: "Main",
      nodes: 0,
      id: 1
    }
  ]
};

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUTE: {
      let routes = state.routes.concat(action.payload);
      let parentRoute = findParenRoute(action.payload.route, routes);

      parentRoute.nodes++;
      return { ...state, routes };
    }
    case DELETE_ROUTE:
      let pathPage = action.payload.route.split("/").reverse()[0];
      let parentRoute = findParenRoute(action.payload.route, state.routes);

      let editedRoutes = state.routes.filter(r => {
        if (r.id === action.payload.id) {
          parentRoute.nodes += r.nodes;
          return false;
        } else {
          return true;
        }
      });

      parentRoute.nodes--;

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

const findParenRoute = (action, routes) => {
  let prevPath = action.split("/");

  prevPath.reverse().splice(0, 1);
  prevPath = prevPath.reverse().join("/");

  return routes.find(el => el.route === prevPath);
};

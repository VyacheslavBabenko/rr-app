import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routesReducer } from "./routesReducer";
import { appReducer } from "./appReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["routes"]
};

const rootReducer = combineReducers({
  routes: routesReducer,
  app: appReducer
});

export default persistReducer(persistConfig, rootReducer);

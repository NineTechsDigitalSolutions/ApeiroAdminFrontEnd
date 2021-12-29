import { combineReducers } from "redux";

import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  themeReducer,
});

export default rootReducer;

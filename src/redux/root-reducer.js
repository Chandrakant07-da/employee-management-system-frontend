import { combineReducers } from "redux";

import { signinReducer } from "./signIn/signin.reducer";

export const rootReducer = combineReducers({
  signin: signinReducer,
});
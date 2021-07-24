import { combineReducers } from "redux";

import weather from "./weatherReducer";
import alert from "./alertReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  weather,
  alert,
});

import { combineReducers } from "redux";
import { ISpeachesState, speachesReducer } from "./model/speaches/reducer";

export interface IAppState {
  speaches: ISpeachesState;
}

export const reducer = combineReducers({
  speaches: speachesReducer
});

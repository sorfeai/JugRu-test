import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "./reducer";
import { SpeachesActionType, SpeachesAction } from "./model/speaches/actions";

export type AppActionType = SpeachesActionType;

export type AppAction = SpeachesAction;

export type AppDispatch = ThunkDispatch<IAppState, {}, AppAction>;

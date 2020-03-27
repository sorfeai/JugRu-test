import produce from "immer";
import { ISpeach, Language, Difficulty } from "./types";
import {
  SpeachesAction,
  SET_SPEACHES,
  CHECK_LANGUAGE,
  CHECK_DIFFICULTY,
  SET_SEARCH
} from "./actions";

export interface ISpeachesState {
  speaches: ISpeach[] | null;
  languages: { [key in Language]: boolean };
  difficulties: { [key in Difficulty]: boolean };
  search: string | null;
}

const initialState: ISpeachesState = {
  speaches: null,
  languages: {
    [Language.RU]: false,
    [Language.EN]: false
  },
  difficulties: {
    [Difficulty.Hot]: false,
    [Difficulty.Intermediate]: false,
    [Difficulty.Advanced]: false,
    [Difficulty.Hardcore]: false,
    [Difficulty.Academic]: false
  },
  search: null
};

export const speachesReducer = (
  state: ISpeachesState = initialState,
  action: SpeachesAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_SPEACHES:
        draft.speaches = action.payload;
        break;
      case CHECK_LANGUAGE: {
        const { language, checked } = action.payload;
        draft.languages[language] = checked;
        break;
      }
      case CHECK_DIFFICULTY: {
        const { difficulty, checked } = action.payload;
        draft.difficulties[difficulty] = checked;
        break;
      }
      case SET_SEARCH:
        draft.search = action.payload;
        break;
    }
  });
};

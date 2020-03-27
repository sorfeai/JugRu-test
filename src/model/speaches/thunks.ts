import { AppDispatch } from "../../actions";
import { Language, Difficulty } from "./types";
import {
  SetSpeaches,
  CheckLanguage,
  CheckDifficulty,
  SetSearch
} from "./actions";
import { getSpeachesList } from "../../api";

export function getSpeachesThunk() {
  return (dispatch: AppDispatch) => {
    getSpeachesList().then(speaches => {
      console.log(speaches);
      dispatch(new SetSpeaches(speaches));
    });
  };
}

export function resetFiltersThunk() {
  return (dispatch: AppDispatch) => {
    dispatch(new CheckLanguage({ language: Language.RU, checked: false }));
    dispatch(new CheckLanguage({ language: Language.EN, checked: false }));

    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Hot, checked: false })
    );
    dispatch(
      new CheckDifficulty({
        difficulty: Difficulty.Intermediate,
        checked: false
      })
    );
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Advanced, checked: false })
    );
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Hardcore, checked: false })
    );
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Academic, checked: false })
    );

    dispatch(new SetSearch(null));
  };
}

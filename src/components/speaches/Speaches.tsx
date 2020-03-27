import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Speaches.module.css";
import { AppDispatch } from "../../actions";
import {
  getVisibleSpeaches,
  getSpeachesLanguages,
  getSpeachesDifficulties,
  getSpeachesSearch
} from "./../../model/speaches/selectors";
import {
  CheckLanguage,
  CheckDifficulty,
  SetSearch
} from "./../../model/speaches/actions";
import {
  getSpeachesThunk,
  resetFiltersThunk
} from "./../../model/speaches/thunks";
import { SpeachesList } from "./SpeachesList";
import { SpeachesFilters } from "./SpeachesFilters";
import { Language, Difficulty } from "../../model/speaches/types";

export function Speaches() {
  const visibleSpeaches = useSelector(getVisibleSpeaches);
  const languages = useSelector(getSpeachesLanguages);
  const difficulties = useSelector(getSpeachesDifficulties);
  const search = useSelector(getSpeachesSearch);

  const dispatch = useDispatch<AppDispatch>();

  const checkLanguage = React.useCallback(
    (language: Language, checked: boolean) => {
      dispatch(new CheckLanguage({ language, checked }));
    },
    [dispatch]
  );

  const checkDifficulty = React.useCallback(
    (difficulty: Difficulty, checked: boolean) => {
      dispatch(new CheckDifficulty({ difficulty, checked }));
    },
    [dispatch]
  );

  const setSearch = React.useCallback(
    (value: string) => {
      dispatch(new SetSearch(value));
    },
    [dispatch]
  );

  const resetFilters = React.useCallback(() => {
    dispatch(resetFiltersThunk());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getSpeachesThunk());
  }, [dispatch]);

  return (
    <div className={css.speaches}>
      <div className={css.speachesFilters}>
        <SpeachesFilters
          languages={languages}
          difficulties={difficulties}
          search={search}
          onLanguageCheck={checkLanguage}
          onDifficultyCheck={checkDifficulty}
          onSearchChange={setSearch}
        />
        <div className={css.resetFilters}>
          <button onClick={resetFilters}>Reset filters</button>
        </div>
      </div>
      <div className={css.speachesList}>
        <SpeachesList speaches={visibleSpeaches} />
      </div>
    </div>
  );
}

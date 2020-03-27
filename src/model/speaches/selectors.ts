import { createSelector } from "reselect";
import { IAppState } from "../../reducer";
import { Language, Difficulty } from "./types";

const getSpeaches = (state: IAppState) => state.speaches;

export const getSpeachesList = createSelector(
  getSpeaches,
  speaches => speaches.speaches
);

export const getSpeachesLanguages = createSelector(
  getSpeaches,
  speaches => speaches.languages
);

export const getSpeachesDifficulties = createSelector(
  getSpeaches,
  speaches => speaches.difficulties
);

export const getSpeachesSearch = createSelector(
  getSpeaches,
  speaches => speaches.search
);

const normalizeString = (string: string) =>
  string
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();

const testSearch = (value: string, search: string | null) => {
  if (search === null) return true;
  if (normalizeString(value).includes(normalizeString(search))) return true;
  return false;
};

export const getVisibleSpeaches = createSelector(
  getSpeachesList,
  getSpeachesLanguages,
  getSpeachesDifficulties,
  getSpeachesSearch,
  (speaches, languages, difficulties, search) => {
    const checkedLanguages = Object.keys(languages).filter(
      lang => languages[lang as Language]
    );
    const checkedDifficulties = Object.keys(difficulties).filter(
      difficulty => difficulties[difficulty as Difficulty]
    );

    if (speaches === null) return [];

    return speaches.filter(speach => {
      if (
        (checkedLanguages.length === 0 ||
          checkedLanguages.includes(speach.language)) &&
        (checkedDifficulties.length === 0 ||
          checkedDifficulties.includes(speach.difficulty)) &&
        (testSearch(speach.topic, search) || testSearch(speach.speaker, search))
      ) {
        return true;
      }
      return false;
    });
  }
);

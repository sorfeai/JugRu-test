import { ISpeach, Language, Difficulty } from "./types";

export const SET_SPEACHES = "SET_SPEACHES";
export const CHECK_LANGUAGE = "CHECK_LANGUAGE";
export const CHECK_DIFFICULTY = "CHECK_DIFFICULTY";
export const SET_SEARCH = "CHECK_SEARCH";

export class SetSpeaches {
  public readonly type = SET_SPEACHES;
  constructor(public payload: ISpeach[]) {}
}

interface ICheckLanguagePayload {
  language: Language;
  checked: boolean;
}

export class CheckLanguage {
  public readonly type = CHECK_LANGUAGE;
  constructor(public payload: ICheckLanguagePayload) {}
}

interface ICheckDifficultyPayload {
  difficulty: Difficulty;
  checked: boolean;
}

export class CheckDifficulty {
  public readonly type = CHECK_DIFFICULTY;
  constructor(public payload: ICheckDifficultyPayload) {}
}

export class SetSearch {
  public readonly type = SET_SEARCH;
  constructor(public payload: string | null) {}
}

export type SpeachesActionType =
  | typeof SET_SPEACHES
  | typeof CHECK_LANGUAGE
  | typeof CHECK_DIFFICULTY
  | typeof SET_SEARCH;

export type SpeachesAction =
  | SetSpeaches
  | CheckLanguage
  | CheckDifficulty
  | SetSearch;

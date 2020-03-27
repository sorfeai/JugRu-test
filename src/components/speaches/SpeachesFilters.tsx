import * as React from "react";
import css from "./SpeachesFilters.module.css";
import { Language, Difficulty } from "../../model/speaches/types";
import { CheckboxGroup, Checkbox } from "../checkbox";
import { SearchInput } from "../search-input";

interface ISpeachesFiltersProps {
  languages: { [key in Language]: boolean };
  difficulties: { [key in Difficulty]: boolean };
  search: string | null;
  onLanguageCheck: (language: Language, checked: boolean) => void;
  onDifficultyCheck: (difficulty: Difficulty, checked: boolean) => void;
  onSearchChange: (value: string) => void;
}

export function SpeachesFilters({
  languages,
  difficulties,
  search,
  onLanguageCheck,
  onDifficultyCheck,
  onSearchChange
}: ISpeachesFiltersProps) {
  const checkLanguageRU = React.useMemo(
    () => onLanguageCheck.bind(null, Language.RU),
    [onLanguageCheck]
  );
  const checkLanguageEN = React.useMemo(
    () => onLanguageCheck.bind(null, Language.EN),
    [onLanguageCheck]
  );

  const checkDifficultyHot = React.useMemo(
    () => onDifficultyCheck.bind(null, Difficulty.Hot),
    [onDifficultyCheck]
  );
  const checkDifficultyIntermediate = React.useMemo(
    () => onDifficultyCheck.bind(null, Difficulty.Intermediate),
    [onDifficultyCheck]
  );
  const checkDifficultyAdvanced = React.useMemo(
    () => onDifficultyCheck.bind(null, Difficulty.Advanced),
    [onDifficultyCheck]
  );
  const checkDifficultyHardcore = React.useMemo(
    () => onDifficultyCheck.bind(null, Difficulty.Hardcore),
    [onDifficultyCheck]
  );
  const checkDifficultyAcademic = React.useMemo(
    () => onDifficultyCheck.bind(null, Difficulty.Academic),
    [onDifficultyCheck]
  );

  return (
    <div className={css.filters}>
      <div className={css.languages}>
        <CheckboxGroup title="Language">
          <Checkbox
            label="RU"
            checked={languages.RU}
            onCheck={checkLanguageRU}
          />
          <Checkbox
            label="EN"
            checked={languages.EN}
            onCheck={checkLanguageEN}
          />
        </CheckboxGroup>
      </div>
      <div className={css.difficulties}>
        <CheckboxGroup title="Difficulty">
          <Checkbox
            label="Hot"
            checked={difficulties.Hot}
            onCheck={checkDifficultyHot}
          />
          <Checkbox
            label="Intermediate"
            checked={difficulties.Intermediate}
            onCheck={checkDifficultyIntermediate}
          />
          <Checkbox
            label="Advanced"
            checked={difficulties.Advanced}
            onCheck={checkDifficultyAdvanced}
          />
          <Checkbox
            label="Hardcore"
            checked={difficulties.Hardcore}
            onCheck={checkDifficultyHardcore}
          />
          <Checkbox
            label="Academic"
            checked={difficulties.Academic}
            onCheck={checkDifficultyAcademic}
          />
        </CheckboxGroup>
      </div>
      <div className={css.speachesSearch}>
        <SearchInput value={search} onChange={onSearchChange} />
      </div>
    </div>
  );
}

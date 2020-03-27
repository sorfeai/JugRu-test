import * as React from "react";
import css from "./SearchInput.module.css";

interface ISearchInputProps {
  value: string | null;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: ISearchInputProps) {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );

  return (
    <div className={css.search}>
      <input
        type="text"
        placeholder="Keywords..."
        value={value === null ? "" : value}
        onChange={handleChange}
      />
      <em className={css.label}>Search by topic or speaker name</em>
    </div>
  );
}

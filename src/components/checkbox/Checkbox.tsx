import * as React from "react";
import uniqueId from "lodash/uniqueId";
import css from "./Checkbox.module.css";

interface ICheckboxProps {
  label: string;
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onCheck }: ICheckboxProps) {
  const checkboxId = React.useMemo(() => uniqueId("checkbox__"), []);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheck(e.currentTarget.checked);
    },
    [onCheck]
  );

  return (
    <div className={css.checkbox}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
}

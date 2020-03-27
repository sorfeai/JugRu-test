import * as React from "react";
import css from "./CheckboxGroup.module.css";
import { Checkbox } from "./Checkbox";

interface ICheckboxGroupProps {
  title: string;
  children: React.FunctionComponentElement<typeof Checkbox>[];
}

export function CheckboxGroup({ title, children }: ICheckboxGroupProps) {
  return (
    <div className={css.group}>
      <h4 className={css.title}>{title}</h4>
      <div className={css.checkboxes}>{children}</div>
    </div>
  );
}

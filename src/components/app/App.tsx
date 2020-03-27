import * as React from "react";
import css from "./App.module.css";
import { Speaches } from "../speaches";

export function App() {
  return (
    <div className={css.container}>
      <Speaches />
    </div>
  );
}

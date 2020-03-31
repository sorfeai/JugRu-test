import * as React from "react";
import css from "./Speach.module.css";
import { Language, Difficulty } from "../../model/speaches/types";

interface ISpeachProps {
  topic: string;
  speaker: string;
  language: Language;
  difficulty: Difficulty;
}

export function Speach({ topic, speaker, language, difficulty }: ISpeachProps) {
  return (
    <div className={css.speach}>
      <h2 className={css.topic}>{topic}</h2>
      <div className={css.meta}>
        <div className={css.metaItem}>
          Speaker: <em>{speaker}</em>
        </div>
        <div className={css.metaItem}>
          Language: <em>{language}</em>
        </div>
        <div className={css.metaItem}>
          Difficulty: <em>{difficulty}</em>
        </div>
      </div>
    </div>
  );
}

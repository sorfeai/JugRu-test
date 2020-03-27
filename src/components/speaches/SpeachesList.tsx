import * as React from "react";
import css from "./SpeachesList.module.css";
import { ISpeach } from "../../model/speaches/types";
import { Speach } from "./Speach";

interface ISpeachesListProps {
  speaches: ISpeach[];
}

export function SpeachesList({ speaches }: ISpeachesListProps) {
  return (
    <div className={css.speachesList}>
      {speaches.map(speach => (
        <div className={css.speachWrapper}>
          <Speach
            topic={speach.topic}
            speaker={speach.speaker}
            language={speach.language}
            difficulty={speach.difficulty}
          />
        </div>
      ))}
    </div>
  );
}

export enum Language {
  RU = "RU",
  EN = "EN"
}

export enum Difficulty {
  Hot = "Hot",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Hardcore = "Hardcore",
  Academic = "Academic"
}

export interface ISpeach {
  topic: string;
  speaker: string;
  language: Language;
  difficulty: Difficulty;
}

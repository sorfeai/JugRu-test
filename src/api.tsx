import db from "./db.json";
import { ISpeach } from "./model/speaches/types";

function fakeApiCall<T>(responseData: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(responseData);
    });
  });
}

export function getSpeachesList(): Promise<ISpeach[]> {
  return fakeApiCall((db.speaches as unknown) as ISpeach[]);
}

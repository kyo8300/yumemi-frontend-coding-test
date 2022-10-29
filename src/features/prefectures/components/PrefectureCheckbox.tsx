import React from "react";
import { Prefectures } from "../types";

export const PrefectureCheckbox = ({ prefName, prefCode }: Prefectures) => {
  return (
    <label>
      <input type="checkbox" id={`${prefCode}`} name={`${prefName}`} />
      <span>{prefName}</span>
    </label>
  );
};

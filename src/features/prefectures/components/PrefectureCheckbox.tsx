import React from "react";
import "./PrefectureCheckbox.css";
import { Prefectures } from "../types";

export const PrefectureCheckbox = ({ prefName, prefCode }: Prefectures) => {
  return (
    <label className="prefectures-checkbox">
      <input type="checkbox" id={`${prefCode}`} name={`${prefName}`} />
      <span>{prefName}</span>
    </label>
  );
};

import React, { useEffect } from "react";
import "./PrefectureCheckbox.css";
import { Prefectures } from "../types";
import { usePrefecturesStore } from "@/stores/prefectures";

export const PrefectureCheckbox = ({ prefName, prefCode }: Prefectures) => {
  const addPrefecture = usePrefecturesStore((state) => state.addPrefecture);
  const removePrefecture = usePrefecturesStore(
    (state) => state.removePrefecture,
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = e.target.checked;
    isChecked ? addPrefecture(prefCode) : removePrefecture(prefCode);
  };

  return (
    <label className="prefectures-checkbox">
      <input
        type="checkbox"
        name={prefName}
        value={prefCode}
        onChange={handleOnChange}
      />
      <span>{prefName}</span>
    </label>
  );
};

import React from "react";
import "./PrefecturesList.css";
import { usePrefectures } from "../api/getPrefectures";
import { PrefectureCheckbox } from "./PrefectureCheckbox";

export const PrefecturesList = () => {
  const { data } = usePrefectures();
  return (
    <section className="prefectures-section">
      <p className="prefectures-title">都道府県</p>
      <span className="prefecture-checkbox-wrapper">
        {data?.result.map((pref) => (
          <PrefectureCheckbox
            key={pref.prefCode}
            prefCode={pref.prefCode}
            prefName={pref.prefName}
          />
        ))}
      </span>
    </section>
  );
};

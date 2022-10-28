import React from "react";
import { usePrefectures } from "../api/getPrefectures";

export const PrefecturesList = () => {
  const { data } = usePrefectures();
  return (
    <div>
      {data?.result.map((pref) => (
        <div key={pref.prefCode}>{pref.prefName}</div>
      ))}
    </div>
  );
};

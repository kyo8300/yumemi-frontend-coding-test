import { useQuery } from "@tanstack/react-query";
import { Prefectures } from "../types";

type ResponseData = {
  message: null;
  result: readonly Prefectures[];
};

async function getPrefectures(): Promise<ResponseData> {
  const res = await fetch("/.netlify/functions/fetch-prefectures");
  return res.json();
}

export const usePrefectures = () => {
  return useQuery(["prefectures"], getPrefectures, { suspense: true });
};

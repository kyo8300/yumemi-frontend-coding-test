import { fetchAPI } from "@/utils/fetchAPI";
import { useQueries } from "@tanstack/react-query";
import { PopulationComposition } from "../types";

type ResponseData = {
  data: PopulationComposition[];
  prefCode: number;
};

type FetchedData = {
  message: null;
  result: {
    boundaryYear: number;
    data: [{ label: string; data: PopulationComposition[] }];
  };
};

type PrefCode = {
  prefCode: number;
};

type PrefCodes = {
  prefCodes: number[];
};

async function getPopulationComposition({
  prefCode,
}: PrefCode): Promise<ResponseData> {
  const res = await fetchAPI({
    pathname: `population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
  });
  const data: FetchedData = await res.json();
  return {
    data: data.result.data[0].data,
    prefCode,
  };
}

export const usePopulationComposition = ({ prefCodes }: PrefCodes) => {
  return useQueries({
    queries: prefCodes.map((prefCode) => {
      return {
        queryKey: ["populationComposition", prefCode],
        queryFn: () => getPopulationComposition({ prefCode }),
      };
    }),
  });
};

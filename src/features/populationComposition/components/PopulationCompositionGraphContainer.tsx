import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { usePrefecturesStore } from "@/stores/prefectures";
import { prefectureNames } from "../assets/prefectureNames";
import { usePopulationComposition } from "../api/getPopulationComposition";
import { colors } from "../assets/colors";
import { Loading } from "@/components/Loading";

export const PopulationCompositionGraphContainer = () => {
  const prefCodes = usePrefecturesStore((state) => state.prefCodes);
  const results = usePopulationComposition({ prefCodes });
  const isLoading = results.some((result) => result.isLoading);
  return (
    <>
      {isLoading && <Loading />}
      <div style={{ height: "550px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{
              top: 60,
              right: 40,
              left: 30,
              bottom: 30,
            }}
          >
            <Loading />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="year"
              domain={[1960, 2045]}
              label={{
                value: "年度",
                position: "right",
                dy: 20,
                offset: -10,
              }}
              tickCount={18}
              allowDuplicatedCategory={false}
            />
            <YAxis
              label={{
                value: "人口数",
                position: "insideTopLeft",
                dy: -40,
              }}
              tickCount={10}
            />
            <Tooltip formatter={(value) => `${value}人`} />
            <Legend />
            {results.map(({ data }) => {
              if (!data?.data || !data?.prefCode) return null;

              const { prefCode, data: populationPerYearData } = data;
              return (
                <Line
                  key={prefCode}
                  type="monotone"
                  dataKey="value"
                  stroke={`${colors[prefCode]}`}
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  data={populationPerYearData}
                  name={prefectureNames[prefCode] ?? ""}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

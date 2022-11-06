import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

type PopulationComposition = {
  label: string;
  data: [
    {
      year: number;
      value: number;
    },
  ];
};

type JSONResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: [{ label: string; data: PopulationComposition[] }];
  };
};

const handler: Handler = async (event) => {
  try {
    const prefCode = event.queryStringParameters?.prefCode || "";
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
      {
        headers: {
          "X-API-KEY": process.env.API_KEY ?? "",
        },
      },
    );

    const data = (await res.json()) as JSONResponse;
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: null,
        result: data?.result,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};

export { handler };

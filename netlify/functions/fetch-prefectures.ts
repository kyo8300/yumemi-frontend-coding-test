import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

type JSONResponse = {
  message: null;
  result: Prefectures[];
};

const handler: Handler = async () => {
  try {
    const res = await fetch(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
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

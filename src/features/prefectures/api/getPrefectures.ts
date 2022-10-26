export const getPrefectures = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/api/v1/prefectures`,
    {
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    },
  );

  const data = await response.json();

  console.log(data);
};

export function fetchAPI({ pathname }: { pathname: string }) {
  return fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/v1/${pathname}`, {
    headers: {
      "X-API-KEY": import.meta.env.VITE_API_KEY,
    },
  });
}

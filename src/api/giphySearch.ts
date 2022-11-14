import { GiphyResponse } from "./giphyInterfaces/search";



export const searchGiphy = async (q: string, limit: number = 5, offset: number = 0) : Promise<GiphyResponse> => {
  const controller = new AbortController();
  const { signal } = controller;
  const ep = `https://${import.meta.env.VITE_GIPHY_URL}?api_key=${import.meta.env.VITE_GIPHY_API_TOKEN}&q=${q}&limit=${limit}&offset=${offset}`;
  const resp = await fetch(ep, {signal});
  const res = await resp.json() as GiphyResponse;
  return res;
}
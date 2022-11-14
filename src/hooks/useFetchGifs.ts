

import React, { useEffect, useState } from 'react'
import { GiphyData, GiphyResponse } from '../api/giphyInterfaces/search'
import { searchGiphy } from '../api/giphySearch';

export default function useFetchGifs(category: string) {
  
  const [gifs, setGifs] = useState<GiphyData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const getGifs =async () => {
    const resp = await searchGiphy(category);
    setGifs(resp.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getGifs();
  });

  return (
    {
      gifs,
      isLoading,
    }
  )
}

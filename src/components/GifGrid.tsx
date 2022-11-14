import React, { useEffect, useState } from 'react';
import { GiphyData, GiphyResponse } from '../api/giphyInterfaces/search';
import { searchGiphy } from '../api/giphySearch';
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

interface GifGridProps {
  category: string;
}

export default function GifGrid(props: GifGridProps) {
  const { gifs, isLoading } = useFetchGifs(props.category);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3> {props.category} </h3>
          <div className="card-grid">
            {gifs.map((val) => {
              return (
                <GifItem
                  key={val.id}
                  title={val.title}
                  url={val.images.original.url}
                ></GifItem>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

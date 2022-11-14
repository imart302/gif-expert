import React, { useEffect } from 'react'

interface GifItemProps {
  title: string,
  url: string,
}

export default function GifItem(props: GifItemProps) {
  
  useEffect(() => {
    console.log(props.url);
  
  }, [])
  
  return (

    <div className='card'>
      <img src={props.url} alt={props.title} />
      <p>{props.title}</p>
    </div>
  )
}

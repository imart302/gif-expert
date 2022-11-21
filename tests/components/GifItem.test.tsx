import { render, screen } from '@testing-library/react';
import React from 'react';
import GifItem from '../../src/components/GifItem';

describe('test in <GifItem>', () => {
  const title = 'Saitama';
  const url = 'https://saitama.com/image';

  test('should match snapshot', () => {
    const { container } = render(<GifItem title={title} url={url}></GifItem>);
    expect(container).toMatchSnapshot();
  });

  test('should be placed correctly', () => {
    const { container } = render(<GifItem title={title} url={url}></GifItem>);
    const { src, alt } = screen.getByRole<HTMLImageElement>('img');
   
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });


});

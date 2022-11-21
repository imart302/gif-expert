import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import App from '../src/App';
import useFetchGifs from "../src/hooks/useFetchGifs";


vi.mock("../src/hooks/useFetchGifs");

describe('Tests on <App>', () => {

  afterEach(() => {
    vi.resetAllMocks();
  })

  test('should match snapshot', () => {

    const {container} = render(<App></App>);

    expect(container).toMatchSnapshot();

  });


  test('should add category on form submit', () => {

    vi.mocked(useFetchGifs).mockReturnValue({
      gifs: [],
      isLoading: false
    });
    const { container } = render(<App></App>);

    const form = screen.getByRole<HTMLFormElement>('form');
    const input = screen.getByRole<HTMLInputElement>('textbox');

    const category = 'Hello';

    fireEvent.input(input, {target: {value: category}});
    fireEvent.submit(form);

    const hello = screen.getByText<HTMLHeadElement>(category);
    expect(hello).toBeDefined();
    

  });

});
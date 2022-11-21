import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddCategory from '../../src/components/AddCategory';
import {vi} from 'vitest';

describe('Tests on <AddCategory>', () => {

  test('Should change the category on submit', () => {

    let newCat: string = "";
    const q = 'hello world';

    const nC = vi.fn( (cat: string) => {
      newCat = cat;
    });
    

    render(<AddCategory onNewCategory={nC}></AddCategory>)
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.input(input, {target: {value: q}});
    const form = screen.getByRole<HTMLFormElement>('form');
    fireEvent.submit(form);

    expect(nC).toBeCalledTimes(1);
    expect(nC).toBeCalledWith(q);
    expect(newCat).toBe(q);

  });

  test('Should not be called if input is empty', () => {
    const nC = vi.fn( (cat: string) => {
    });
    

    render(<AddCategory onNewCategory={nC}></AddCategory>)

    const form = screen.getByRole<HTMLFormElement>('form');
    fireEvent.submit(form);

    expect(nC).toBeCalledTimes(0);

  });

});
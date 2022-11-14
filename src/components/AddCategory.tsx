import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react';

interface AddCategoryProps {
  onNewCategory: (category: string) => void;
}

export default function AddCategory(props: AddCategoryProps) {
  const [inputValue, setInputValue] = useState<string>('');
  
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  } 

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onNewCategory(inputValue.trim());
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type={'text'} placeholder={''} value={inputValue} onChange={onInputChange}/>
      </form>
    </>
  );
}

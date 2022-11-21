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
    if(inputValue.trim().length > 0) {
      props.onNewCategory(inputValue.trim());
    }
    
  }

  return (
    <>
      <form aria-label='form' onSubmit={onFormSubmit}>
        <input type={'text'} placeholder={''} value={inputValue} onChange={onInputChange}/>
      </form>
    </>
  );
}

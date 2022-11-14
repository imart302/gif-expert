import { useRef, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './styles.css'

function App() {
  const [categories, setCategories] = useState<{ categories: string[], categoriesL: string[]}>({categories: [], categoriesL:[]});
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddCategory = (cat: string) => {
    if (cat) {
      if (!categories.categoriesL.includes(cat.toLowerCase())) {
        setCategories({categories: [...categories.categories, cat], categoriesL: [...categories.categoriesL, cat.toLowerCase()]});
       
      }
    }
  };

  return (
    <div className="App">
      <h1>Gif expert app</h1>
      <br></br>
      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {categories.categories.map((cate, id) => (
        <div key={id}>
          <br></br>
          <GifGrid category={cate}></GifGrid>
        </div>
      ))}
    </div>
  );
}

export default App;

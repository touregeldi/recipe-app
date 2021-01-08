
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'

function App() {
  const APP_KEY = 'c684bd8e65a5abcf4cd1bba56c65e930'
  const APP_ID = 'dca3505f'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState()
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    
    
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler} >
        <input type='text' onChange={(e)=> setSearch(e.target.value) }/>
        <button type='submit' ></button>
      </form>
      <div className='recipes'>
      {recipes.length !== 0 && recipes.map(recipe => 
          <Recipe 
            key={recipe.recipe.calories}
            name={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            img={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredientLines}/>)}
      </div>

    </div>
  );
}

export default App;

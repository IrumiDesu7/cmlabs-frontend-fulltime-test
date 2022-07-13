import { useEffect, useState } from 'react';
import './ingredients.css';

export default function Ingredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const ingredientsElement = allIngredients.map((data) => {
    return <li key={data.idIngredient}>{data.strIngredient}</li>;
  });

  const filteredIngredientsElements = filteredIngredients.map((data) => {
    return <li key={data.idIngredient}>{data.strIngredient}</li>;
  });

  function handleSearch() {
    setFilteredIngredients(
      allIngredients
        .filter((data) => data.strIngredient.includes(`${searchQuery}`))
        .map((data) => {
          return {
            idIngredient: `${data.idIngredient}`,
            strIngredient: `${data.strIngredient}`,
          };
        })
    );
  }

  useEffect(() => {
    async function getIngredients() {
      const rest = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
      );
      const data = await rest.json();
      setAllIngredients(data.meals);
    }
    getIngredients();
  }, []);

  return (
    <main>
      <h2 className='title'>Ingredients</h2>
      <div className='search-container'>
        <label htmlFor='search'>Search</label>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='chicken'
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button onClick={handleSearch}>Search</button>
        <button
          onClick={() =>
            console.log(
              allIngredients
                .filter((data) => data.strIngredient.includes(`${searchQuery}`))
                .map((data) => data.strIngredient)
            )
          }
        >
          Check filtered ingredients status
        </button>
      </div>
      <ul>
        {/* {filteredIngredients.length === 0
          ? ingredientsElement
          : filteredIngredientsElements} */}
        {filteredIngredientsElements}
      </ul>
    </main>
  );
}

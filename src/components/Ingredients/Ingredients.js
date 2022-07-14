import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ingredients.css';

export default function Ingredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  /* Mapping through the array of ingredients and returning a list item with a link to the ingredient. */
  const ingredientsElement = allIngredients.map((data) => {
    return (
      <li key={data.idIngredient}>
        <Link to={data.strIngredient}>{data.strIngredient}</Link>
      </li>
    );
  });

  /* Mapping through the array of filtered ingredients and returning a list item with a link to the ingredient. */
  const filteredIngredientsElements = filteredIngredients.map((data) => {
    return (
      <li key={data.idIngredient}>
        <Link to={`${data.strIngredient}`}>{data.strIngredient}</Link>
      </li>
    );
  });

  /**
   * If the search query is empty, set the filtered ingredients to an empty array. Otherwise, set the
   * filtered ingredients to the ingredients that match the search query.
   * @param e - the event object
   */
  function handleChange(e) {
    setSearchQuery(e.target.value);
    searchQuery === ''
      ? setFilteredIngredients([])
      : setFilteredIngredients(
          allIngredients
            .filter((data) =>
              data.strIngredient.toLowerCase().includes(`${searchQuery}`)
            )
            .map((data) => {
              return {
                idIngredient: `${data.idIngredient}`,
                strIngredient: `${data.strIngredient}`,
              };
            })
        );
  }

  /* A hook that is used to fetch data. */
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
          onChange={handleChange}
          value={searchQuery}
        />
        <button
          onClick={() => {
            setFilteredIngredients([]);
            setSearchQuery('');
          }}
        >
          Clear
        </button>
      </div>

      <ul className='ingredients-list'>
        {/* Rendering element depending on the length of filteredIngredients */}
        {filteredIngredients.length === 0
          ? ingredientsElement
          : filteredIngredientsElements}
      </ul>
    </main>
  );
}

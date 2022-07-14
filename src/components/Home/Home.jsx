import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './home.css';

export default function Home() {
  const [ingredients, setIngredients] = useState([]);

  const detailsElement = ingredients.map((ingredient) => {
    return (
      <Link
        to={`ingredients/Chicken/${ingredient.idMeal}`}
        className='detail-item'
        key={`${ingredient.idMeal}`}
      >
        <div
          style={{
            backgroundImage: `url(${ingredient.strMealThumb})`,
            backgroundSize: `cover`,
          }}
          className='food-image'
        />
        <h4 className='food-title'>{ingredient.strMeal}</h4>
      </Link>
    );
  });

  useEffect(() => {
    async function getIngredientsDetails() {
      const rest = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon`
      );
      const data = await rest.json();
      setIngredients(data.meals);
    }
    getIngredientsDetails();
  }, []);
  return (
    <>
      <Hero />
      <main className='home-container'>
        <h2>
          Click <Link to='ingredients'>here</Link> to find recipes by
          ingredients
        </h2>
        <h2>Check out these recommended recipes for you</h2>
        <div className='recommended-container'>{detailsElement}</div>
      </main>
    </>
  );
}

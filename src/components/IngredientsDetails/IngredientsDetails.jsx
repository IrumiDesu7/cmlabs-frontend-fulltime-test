import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ingredientDetails.css';

export default function IngredientsDetails() {
  const { ingredientsName } = useParams();
  const [ingredients, setIngredients] = useState([
    { strMealThumb: '', strMeal: '' },
  ]);

  /* A ternary operation. If the data is null (Like Borlotti Beans) then return "Sorry", else return list of meal(s)*/
  const detailsElement =
    ingredients !== null ? (
      ingredients.map((ingredient) => {
        return (
          <Link
            to={`${ingredient.idMeal}`}
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
      })
    ) : (
      <h3>
        We're sorry, currently there's no data here. You can come back later :)
      </h3>
    );

  /* It's a function that fetches data from the API */
  useEffect(() => {
    async function getIngredientsDetails() {
      const rest = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`
      );
      const data = await rest.json();
      setIngredients(data.meals);
    }
    getIngredientsDetails();
  }, [ingredientsName]);

  return (
    <div className='details-container'>
      <h2>Details</h2>
      <div className='details-list'>{detailsElement}</div>
    </div>
  );
}

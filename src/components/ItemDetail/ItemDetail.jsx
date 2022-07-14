import { useEffect, useState } from 'react';
import './itemDetail.css';
import { useParams } from 'react-router-dom';

export default function ItemDetail() {
  const { ingredientsId } = useParams();
  const [itemDetails, setItemDetails] = useState([]);

  function getIngredients() {
    return Object.values(itemDetails).splice(9, 20);
  }
  function getMeasures() {
    return Object.values(itemDetails).splice(29, 20);
  }

  const ingredientElement = getIngredients()
    .filter((ingredient) => {
      if (ingredient === '' || ingredient === ' ') {
        return false;
      } else {
        return true;
      }
    })
    .map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });

  const measureElement = getMeasures()
    .filter((measure) => {
      if (measure === '' || measure === ' ') {
        return false;
      } else {
        return true;
      }
    })
    .map((measure, index) => {
      return <li key={index}>{measure}</li>;
    });

  // const ingredientElement = getIngredients()
  //   .filter((ingredient) => ingredient !== '')
  //   .map((ingredient, index) => {
  //     return <li key={index}>{ingredient}</li>;
  //   });
  // const measureElement = getMeasures()
  //   .filter((measure) => measure !== '')
  //   .map((measure, index) => {
  //     return <li key={index}>{measure}</li>;
  //   });

  useEffect(() => {
    async function getItemDetails() {
      const rest = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredientsId}`
      );
      const data = await rest.json();
      setItemDetails(data.meals[0]);
    }
    getItemDetails();
  }, [ingredientsId]);

  return (
    <div className='item-detail-container'>
      <button onClick={() => console.log(getMeasures())}>
        print recipe element
      </button>
      <h2 className='item-title'>{itemDetails.strMeal}</h2>
      <div className='content-container'>
        <div className='top'>
          <div className='left-layout'>
            <p className='area'>{itemDetails.strArea}</p>

            <img src={`${itemDetails.strMealThumb}`} alt='food' />
          </div>
          <div className='right-layout'>
            <div className='instructions-container'>
              <h4>Instructions</h4>
              <p>{itemDetails.strInstructions}</p>
            </div>
            <div className='recipes-container'>
              <h4>Recipes</h4>
              <div className='recipe-lists'>
                <ul className='measure-list'>{measureElement}</ul>
                <ul className='ingredient-list'>{ingredientElement}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-layout'></div>
      </div>
    </div>
  );
}

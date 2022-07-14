import { useEffect, useState } from 'react';
import './itemDetail.css';
import { useParams } from 'react-router-dom';

export default function ItemDetail() {
  // const { detail } = useParams();
  // const [itemDetails, setItemDetails] = useState([]);

  // useEffect(() => {
  //   async function getItemDetails() {
  //     const rest = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${
  //         Object.values(params)[0]
  //       }`
  //     );
  //     const data = await rest.json();
  //     setItemDetails(data.meals);
  //   }
  //   getItemDetails();
  //   console.log(params);
  // }, [params]);

  return (
    <div className='item-detail-container'>
      <h2 className='item-title'>Fettucini</h2>
      <div className='content-container'>
        <div className='left-layout'>
          <p className='area'></p>
          <img src='' alt='food' />
        </div>
        <div className='right-layout'></div>
        <div className='bottom-layout'></div>
      </div>
    </div>
  );
}

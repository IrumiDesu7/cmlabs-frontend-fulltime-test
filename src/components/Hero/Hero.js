import './hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='food-icons'>
        <img
          src={`${process.env.PUBLIC_URL}/icons/food1.svg`}
          alt='food1'
          width={'20px'}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/food1.svg`}
          alt='food1'
          width={'20px'}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/food1.svg`}
          alt='food1'
          width={'20px'}
        />
      </div>
      <h5>mealapp API website</h5>
      <h1>See All The Delicious Foods</h1>
    </div>
  );
}

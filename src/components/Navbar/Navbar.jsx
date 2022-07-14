import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <h2 className='logo'>
        <Link to='/'>mealapp</Link>
      </h2>
      <ul className='nav-list'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>Foods</li>
        <li>
          <NavLink to='ingredients'>Ingredients</NavLink>
        </li>
        <li>Local Culinary</li>
      </ul>
    </nav>
  );
}

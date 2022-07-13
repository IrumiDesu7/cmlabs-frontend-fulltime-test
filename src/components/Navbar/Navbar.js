import './navbar.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <h2 className='logo'>mealapp</h2>
      <ul className='nav-list'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/'>Foods</NavLink>
        </li>
        <li>
          <NavLink to='ingredients'>Ingredients</NavLink>
        </li>
        <li>
          <NavLink to='/'>Local Culinary</NavLink>
        </li>
      </ul>
    </nav>
  );
}

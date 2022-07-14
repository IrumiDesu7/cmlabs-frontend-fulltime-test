import Ingredients from './components/Ingredients/Ingredients';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import IngredientsDetails from './components/IngredientsDetails/IngredientsDetails';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='foods' />
        <Route path='ingredients' element={<Ingredients />} />
        <Route
          path='ingredients/:ingredientsName'
          element={<IngredientsDetails />}
        />
        <Route
          path='ingredients/:ingredientsName/:ingredientsId'
          element={<ItemDetail />}
        />
        <Route path='local-culinary' />
      </Routes>
      ;
    </>
  );
}

export default App;

/* <Routes>
  <Route path='/' element={<Home />} />
  <Route path='foods' />
  <Route path='ingredients' element={<Ingredients />} />
  <Route path='ingredients/:ingredients' element={<IngredientsDetails />} />
  <Route path='ingredients/:ingredients/:detail' element={<ItemDetail />} />
  <Route path='local-culinary' />
</Routes>;
*/

import Ingredients from './components/Ingredients/Ingredients';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='foods' />
        <Route path='ingredients' element={<Ingredients />} />
        <Route path='local-culinary' />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className='App'>
      <div className=' min-h-screen p-6 bg-white text-gray-600 text-lg '>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/recipe-item/:id' element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

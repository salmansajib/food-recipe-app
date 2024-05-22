import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';

function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  // console.log(searchParam);

  return (
    <nav className=' flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 '>
      <h2 className=' text-2xl font-semibold '>
        <NavLink to={'/'}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit} className=' flex  gap-3 '>
        <input
          type='text'
          name='search'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder='Enter Items...'
          className=' bg-gray-800 p-3 px-8 rounded-full  lg:w-96 shadow-lg text-gray-50  '
        />
        <button
          type='submit'
          onClick={handleSubmit}
          className=' bg-gray-800 text-gray-50 px-8 py-3 rounded-full hover:text-white transition '
        >
          Search
        </button>
      </form>
      <ul className=' flex gap-5 '>
        <li>
          <NavLink
            to={'/'}
            className=' text-black hover:text-gray-700 duration-300 '
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/favorites'}
            className=' text-black hover:text-gray-700 duration-300 '
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

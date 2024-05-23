/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [receipeDetailsData, setReceipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam('');
        navigate('/');
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam('');
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let copyFavoriteList = [...favoritesList];

    const index = copyFavoriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      copyFavoriteList.push(getCurrentItem);
    } else {
      copyFavoriteList.splice(index);
    }

    setFavoritesList(copyFavoriteList);
  }

  console.log(favoritesList, 'favoritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        receipeDetailsData,
        setReceipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

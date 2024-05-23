import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context';

function DetailsPage() {
  const { id } = useParams();
  const {
    receipeDetailsData,
    setReceipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  // console.log(params);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);

      if (data?.data?.recipe) {
        setReceipeDetailsData(data?.data?.recipe);
      }
    }

    getRecipeDetails();
  }, [id]);

  return (
    <div className=' container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
      <div className=' row-start-2 lg:row-start-auto '>
        <div className=' h-96 overflow-hidden rounded-xl group '>
          <img
            src={receipeDetailsData?.image_url}
            alt=''
            className=' w-full h-full object-cover group-hover:scale-105 duration-300 '
          />
        </div>
      </div>
      <div className=' flex flex-col gap-3 '>
        <span className=' text-sm text-cyan-700 font-medium '>
          {' '}
          {receipeDetailsData?.publisher}{' '}
        </span>
        <h3 className=' font-bold text-2xl truncate text-black '>
          {receipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(receipeDetailsData)}
            className=' p-3 px-8 rounded-lg text-sm  font-medium capitalize tracking-wider mt-1 inline-block bg-gray-900 text-gray-50 cursor-pointer '
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === receipeDetailsData?.id
            ) !== -1
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </button>
        </div>
        <div>
          <span className=' text-2xl font-semibold text-gray-900 '>
            Ingredients:
          </span>
          <ul className=' flex flex-col gap-3 list-inside list-disc mt-3 '>
            {receipeDetailsData?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className=' text-lg font-medium text-gray-800 '>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className=' text-lg font-medium text-gray-800 '>
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

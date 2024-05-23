import RecipeItem from '../components/RecipeItem';
import { useContext } from 'react';
import { GlobalContext } from '../context';

function FavoritesPage() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className=' py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p
            style={{
              background: 'linear-gradient(45deg, #cc208e 0%, #6713d2 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className=' text-xl lg:text-4xl text-center text-gray-900 font-extrabold '
          >
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;

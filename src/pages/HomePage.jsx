import { useContext } from 'react';
import { GlobalContext } from '../context';
import RecipeItem from '../components/RecipeItem';

function HomePage() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <h2>Loading...Please wait!</h2>;

  return (
    <div className=' py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
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
            Nothing to show. Please search by some food name to get the recipe.
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;

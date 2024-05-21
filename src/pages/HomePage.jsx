import { useContext } from 'react';
import { GlobalContext } from '../context';
import RecipeItem from '../components/RecipeItem';

function HomePage() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className=' py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className=' text-xl lg:text-4xl text-center text-black font-extrabold '>
            Nothing to show. Please search by some food name for getting the
            recipe.
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;

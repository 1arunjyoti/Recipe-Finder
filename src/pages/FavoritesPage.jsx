import RecipeCard from "../components/RecipeCard";
const FavoritesPage = () => {
  const fav = false;
  return (
    <div className="bg-[#faf9fb] p-10 flex-1 min-h-screen">
        <div className="max-w-screen-lg max-auto">
          <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

          {!fav && (
            <div className="h-[80vh] flex flex-col items-center gap-4">
              <img src="/404.svg" alt="" className="h-1/4" />
            </div>
          )}

          {fav && (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          )}

        </div>
    </div>
  )
}

export default FavoritesPage
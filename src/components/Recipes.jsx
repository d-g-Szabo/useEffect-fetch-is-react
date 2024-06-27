// import useEffectr from react
import { useEffect } from "react";
import { useState } from "react";
export default function Recipes() {
  //we are using the useEffect to track the API response
  //   useEffect(
  //     function () {
  // effect --> DOM manipulation, API fetch, timners
  // },
  // [
  /* The dependecy arry keeps an eye on a value, When the value updates, the effect triggers again. If the dependecy array is empty, the effect will trigger once. //! If you forget the dependency array, the effect will trigger forever. */
  //     ]
  //   );

  // I want to put the wrangled data in state, because I want to track the value of my wrangled data
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // I want to get data from API with fetch
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes");
      // parse the fetched data into json
      const data = await response.json();
      //we need to wrangle the data, filter what we want
      const wrangledData = data.recipes[28];
      setRecipes([wrangledData]);
    }
    //called the fetchData function here to be tracked by useEffect
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.difficulty}</p>
          </div>
        );
      })}
    </div>
  );
}

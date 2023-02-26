import { useState } from "react";
import RecipeList from "../../components/RecipeList";
import useFetch from "../../hooks/useFetch";

// styles
import "./Home.css";

export default function Home() {
  const { data } = useFetch("recipes");

  return (
    <div className="home">
      {/* {error && <p className="error">{error}</p>} */}
      {/* {isPending && <p className="loading">Loading...</p>} */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

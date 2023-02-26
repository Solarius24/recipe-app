import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";

import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const { data } = useFetch("recipes");

  let filtered;
  try {
    filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  } catch (err) {
    console.log(err.message);
  }

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {data && <RecipeList recipes={filtered} />}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

// styles
import "./Recipe.css";

export default function Recipe() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { mode } = useTheme();


  useEffect(() => {
    setIsPending(true)

    const getReceipeData = async () => {
      const docRef = doc(db, "recipes", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let response = docSnap.data()
        setData(response)
        setIsPending(false)
      } else {
        setError("No such document!")
      }
    };
    getReceipeData()
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>ing</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}

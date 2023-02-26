import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config"


export default function useFetch(c) {
const [data, setData] = useState(null)

useEffect(()=>{
  const ref = collection(db, c)
  const unsub = onSnapshot(ref, (snapshot) => {
    let results = []
    snapshot.docs.forEach(doc => {
      results.push({id:doc.id,...doc.data()})
      
    });
    setData(results)
  })
  return ()=> unsub()
},[c])

return {data}


}

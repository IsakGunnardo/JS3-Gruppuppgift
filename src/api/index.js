import { useEffect, useState } from "react";
//Försöka att skapa en 
export function getAllComments({comments}) {
    const [api, setApi] = useState("posts");
    const comments = () => {setApi(...api, comments)}
    

    useEffect(() => {
        let result = await fetch(`https://dummyjson.com/${api}`);
        let json = await result.json();
        return json;
    },[api]);
    
    
} 


export async function getAllProducts() {
    let result = await fetch("https://dummyjson.com/products");
    let json = await result.json();
    return json;
  }
  useEffect(() => {
    getAllProducts().then((result) => setProducts(result.products));
  }, []);

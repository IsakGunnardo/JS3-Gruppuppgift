export async function getAllPosts() {
  let result = await fetch("https://dummyjson.com/posts");
  let json = await result.json();
  return json;
}


export async function getAllComments() {
  let result = await fetch("https://dummyjson.com/comments");
  let json = await result.json();
  return json;
}


export async function getAllUsers() {
  let result = await fetch("https://dummyjson.com/users");
  let json = await result.json();
  return json;
}







/*
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
*/
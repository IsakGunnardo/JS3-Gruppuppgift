import React from "react";

import { Main } from "../components/main";
//import { useEffect, useState } from "react";
//import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";

export function Home(props) {
  console.log("HOME: ", props.users);
  console.log("HOME POSTS: ", props.posts);
  /*  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
  }, []);
  
  useEffect(() => {
    getAllComments().then((result) => setComments(result.comments))
  }, []);

  useEffect(() => {
    getAllUsers().then((result) => setUsers(result.users));
  }, []);
   <Main posts={posts} users={users} />
  */
  return (
    <>
      <Main posts={props.posts} users={props.users} />
    </>
  );
}

import "./App.css";
import { useEffect, useState } from "react";

import { Home } from "./Pages/home";
import { AddPost } from "./Pages/addpost";
import { PostAComment } from "./Pages/post";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";

import Navigator from "./components/navigator";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";
import {Main} from './components/main'
import { Route, Routes, Outlet } from "react-router-dom";


function PeopleList({ users }) {
  return (
    <ul>
      {users.map((person, index) => (
        <li key={index}>{person.firstName}</li>
      ))}
    </ul>
  );
}

function PostKomponent({ posts }) {
  return (
    <ul>
      {posts.map((holder, index) => (
        <li key={index}>{holder.body}</li>
      ))}
    </ul>
  );
}

function CommentKomponent ({ comments }) {
  return (
    <ul>
      {comments.map((holder, index) => {
        return (
        <li key={index}>{holder.body} </li>
      )})}
    </ul>
  )
}

function App() {
  const [posts, setPosts] = useState([]);
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

  //console.log(comments.body);
  /*
  let content; 
  if (Route.route)
  */
 
  return (
    <> 
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addpost" element={<AddPost />}/>
        <Route path="/post" element={<PostAComment />}/>
      </Routes> 
        <Navigator />
        <div className="content-container">
          <AsideLeft />
          <Main posts={posts} users={users} />
          <AsideRight />
        </div>
        <h1>Users</h1>
        <PeopleList users={users} />
        <PostKomponent posts={posts} />
        <h2>Comments</h2>
        <CommentKomponent comments={comments} />       
    </>
  );
}

export default App;

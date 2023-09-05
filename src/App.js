import "./App.css";

import Navigator from "./components/navigator";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";
import { useEffect, useState } from "react";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";
import { MainContent } from "./components/main";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home";

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
        <Route path="/" element={<Home />}></Route>
        <Route path="AddPost" element={<Home />}></Route>
        <Route path="/post" element={<Home />}></Route>
      </Routes>
        <Navigator />
        <div className="content-container">
          <AsideLeft />
          <MainContent posts={posts} users={users} />
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

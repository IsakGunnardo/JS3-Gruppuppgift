import "./App.css";
import { useEffect, useState } from "react";

import { Home } from "./pages/home";
import { AddPost } from "./pages/addpost";
import { OnePost } from "./pages/post";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";

import Navigator from "./components/navigator";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";
import { Route, Routes } from "react-router-dom";

/* 
function PeopleList({ users }) {
  return (
    <ul>
      {users.map((person, index) => (
        <li key={index}>{person.firstName}</li>
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
*/
/* function PostKomponent({ posts }) {
  return (
    <ul>
      {posts.map((holder, index) => (
        <li key={index}>{holder.body}</li>
      ))}
    </ul>
  );
} <h1>Users</h1>
 <PostKomponent posts={posts} />       <PeopleList users={users} />
       
        <h2>Comments</h2>
        <CommentKomponent comments={comments} />   */

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
    getAllComments().then((result) => setComments(result.comments));
    getAllUsers().then((result) => setUsers(result.users));
  }, []);

  console.log("USERS: ", users);
  console.log("POSTS: ", posts);

  //console.log(comments.body);
  /*
  let content; 
  if (Route.route)
  */

  // https://reactrouter.com/en/main/hooks/use-navigate
  // URL parameters
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/post" element={<OnePost />} />
      </Routes>
      <div className="content-container">
        <AsideLeft />
        <Home posts={posts} users={users} />
        <AsideRight />
      </div>
    </>
  );
}

export default App;

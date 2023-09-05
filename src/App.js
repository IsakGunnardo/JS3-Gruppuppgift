import "./App.css";

import Navigator from "./components/navigator";
import { getAllPosts, getAllComments, getAllUsers } from "./api";
import { useEffect, useState } from "react";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";
import { MainContent } from "./components/main";

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

function App() {
  const [posts, setPosts] = useState([]);
  //const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
  }, []);

  /*
  useEffect(() => {
    getAllComments().then((result) => setComments(result.comments))
  }, []);
*/
  useEffect(() => {
    getAllUsers().then((result) => setUsers(result.users));
  }, []);

  /* console.log(posts[1]); */

  return (
    <>
      <Navigator />
      <div className="content-container">
        <AsideLeft />
        <MainContent posts={posts} users={users} />
        <AsideRight />
      </div>
      <h1>Users</h1>
      <PeopleList users={users} />
      <PostKomponent posts={posts} />
    </>
  );
}

export default App;

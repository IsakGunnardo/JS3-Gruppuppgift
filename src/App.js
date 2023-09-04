//import './App.css';

import Navigator from './components/navigator';
import { getAllPosts, getAllComments, getAllUsers } from './api';
import { useEffect, useState } from 'react';

function PeopleList ({users}) {
  return (
    <ul>
      {users.map((person, index) => (
        <li key={index}>
         {person.firstName}
        </li>
      ))}
    </ul>
  );
}

function PostKomponent ({posts}) {
  return (
    <ul>
      {posts.map((holder, index) => (
        <li key={index}>
          {holder.body}
        </li>
      ))}    
    </ul>
  );
}

function CommentKomponent ({comments}) {
  return (
    <ul>
      {comments.map((holder, index) => {
        <li key={index}>
          {holder.body}
        </li>
      })}
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
    getAllUsers().then((result) => setUsers(result.users))
  }, []);


console.log(comments[1])

  return (
    
    <>
      <Navigator />
      
      <h1>Users</h1>
      <PeopleList users={users} />
      <h2>Posts</h2>
      <PostKomponent posts={posts} />
      <h2>Comments</h2>
      <CommentKomponent comments={comments} />

    </>
    
  );
}

export default App;
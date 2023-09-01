import './App.css';
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

function App() {
  //const [posts, setPosts] = useState([]);
  //const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

/*
  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
  }, []);

  useEffect(() => {
    getAllComments().then((result) => setComments(result.comments))
  }, []);
*/
  useEffect(() => {
    getAllUsers().then((result) => setUsers(result.users))
  }, []);


console.log(users[1])



  return (
    <>
      <h1>Users</h1>
      <PeopleList users={users} />
    </>
  );
}

export default App;
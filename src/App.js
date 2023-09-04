//import './App.css';
import { getAllComments,  } from './api';
import Navigator from './components/navigator';
function App() {
  
  return (
    <>
      <h1>Users</h1>
      <PeopleList users={users} />
      <PostKomponent posts={posts} />
    </>
  );
}

export default App;
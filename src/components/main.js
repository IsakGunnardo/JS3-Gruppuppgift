//import {Link} from 'react-router-dom';

export function Main({ posts, users }) {
  console.log("MAIN: ", users);
  console.log("MAIN POSTS: ", posts);
  if (Object.keys(users).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    
    return (
      <>
        <ul>
          {posts.map((holder, index) => (
            <li key={index} style={{ borderBottom: "1px solid black" }}>
              <h3>Title: {holder.title}</h3>
              <main>{holder.body}</main>
              <h4>
                Creator: {users[index].firstName} {users[index].lastName}
              </h4>
              <img src={users[index].image} width={25} height={25} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

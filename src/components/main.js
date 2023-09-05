export function MainContent({ posts, users }) {
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
            </li>
          ))}
          {console.log(JSON.stringify(users[1]))}
          {console.log(JSON.stringify(posts[1]))} 
        </ul>
      </>
    );
  }
}

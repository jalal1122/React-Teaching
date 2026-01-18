import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPost(data);
          console.log(post);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      {post ==! [] ? (
        post.map((item) => {
          return (
            <div key={item.id} className="post">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default App;

import React from "react";

function UseMemoExample() {
  const [posts, setPosts] = React.useState([]);
  const [value, setValue] = React.useState("");
  console.log("Pai renderizou");

  //ComponentWillMount
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <h1>
        {React.useMemo(() => {
          return posts.map((post) => (
            <div className="post" key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              {console.log("filho renderizou")}
            </div>
          ));
        }, [posts])}
      </h1>
    </div>
  );
}

export default UseMemoExample;

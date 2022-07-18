import React from "react";
import PostList from "./components/PostList";

function App() {
  console.log(new Date().toLocaleDateString())
  return (
    <div>
      <PostList/>
    </div>
  );
}

export default App;

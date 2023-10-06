import { useEffect, useState } from "react";
import "./App.css";
import BlogPost from "./BlogPost";

function App() {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(() => {
    async function fetchBlogPostData() {
      const response = await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setBlogPosts(jsonData);
    }
    fetchBlogPostData();
  }, []);

  return (
    <div className="BlogPosts">
      {blogPosts
        ? blogPosts.map((item) => <BlogPost data={item} key={item.id} />)
        : "loading"}
    </div>
  );
}

export default App;

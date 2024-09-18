import { useState, useEffect } from "react";
import EachBlog from "../EachBlog";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [inp,setInp] = useState('')

  const mainData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setBlogData(data);
    console.log(data);
  };

  const inputChange = event => {
     setInp(event.target.value)
  }

  useEffect(() => {
    mainData();
  },[]);

  const deletion1 = id => {
    const ftdata = blogData.filter(each => (
        each.id !== id
    ));
    setBlogData(ftdata)
  }

  const serchRelaventPost = () => {
    const f = blogData.filter(each => (
        each.includes(inp)
    ));
    setBlogData(f)
  }

  return (
    <div>
      <h1>All Blogs</h1>
      <div>
      <input type='text' onChange={inputChange}/>
      <button onClick={serchRelaventPost}>Serch</button>
      </div>
      <ul>
        {blogData.map((each, index) => (
          <EachBlog item={each} id={index} delition={deletion1}/>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

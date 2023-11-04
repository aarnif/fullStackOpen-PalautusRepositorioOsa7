import { useRef } from "react";
import { Link } from "react-router-dom";
import Togglable from "./Togglable";
import NewBlog from "./NewBlog";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  const blogFormRef = useRef();
  const byLikes = (b1, b2) => b2.likes - b1.likes;

  const style = {
    marginBottom: 2,
    padding: 5,
    borderStyle: "solid",
  };

  return (
    <>
      <Togglable buttonLabel="new note" ref={blogFormRef}>
        <NewBlog
          handleVisibility={() => blogFormRef.current.toggleVisibility()}
        />
      </Togglable>
      <div>
        {blogs.sort(byLikes).map((blog) => (
          <div style={style}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;

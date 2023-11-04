import { useRef } from "react";
import Togglable from "./Togglable";
import NewBlog from "./NewBlog";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  const blogFormRef = useRef();
  const byLikes = (b1, b2) => b2.likes - b1.likes;
  return (
    <>
      <Togglable buttonLabel="new note" ref={blogFormRef}>
        <NewBlog
          handleVisibility={() => blogFormRef.current.toggleVisibility()}
        />
      </Togglable>
      <div>
        {blogs.sort(byLikes).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;

import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateBlog, removeBlog } from "../reducers/blogsReducer";
import { inialitizeBlogs } from "../reducers/blogsReducer";
import { setNotification } from "../reducers/notificationReducer";

const Blog = ({ blog, canRemove }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const like = async () => {
    const blogToUpdate = { ...blog, likes: blog.likes + 1, user: blog.user.id };
    const updatedBlog = dispatch(updateBlog(blogToUpdate));
    dispatch(
      setNotification({
        message: `A like for the blog '${blog.title}' by '${blog.author}'`,
        type: "info",
      })
    );
  };

  const remove = async () => {
    const ok = window.confirm(
      `Sure you want to remove '${blog.title}' by ${blog.author}`
    );
    if (ok) {
      const deletedBlog = dispatch(removeBlog(blog.id));
      dispatch(
        setNotification({
          message: `The blog' ${blog.title}' by '${blog.author} removed`,
          type: "info",
        })
      );
      dispatch(inialitizeBlogs());
    }
  };

  const style = {
    marginBottom: 2,
    padding: 5,
    borderStyle: "solid",
  };

  return (
    <div style={style} className="blog">
      {blog.title} {blog.author}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide" : "show"}
      </button>
      {visible && (
        <div>
          <div>
            {" "}
            <a href={blog.url}> {blog.url}</a>{" "}
          </div>
          <div>
            likes {blog.likes} <button onClick={like}>like</button>
          </div>
          <div>{blog.user && blog.user.name}</div>
          {canRemove && <button onClick={remove}>delete</button>}
        </div>
      )}
    </div>
  );
};

Blog.propTypes = {
  like: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  canRemove: PropTypes.bool,
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
  }),
};

export default Blog;

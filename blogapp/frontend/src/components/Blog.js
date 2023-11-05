import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { updateBlog, removeBlog } from "../reducers/blogsReducer";
import { inialitizeBlogs } from "../reducers/blogsReducer";
import { setNotification } from "../reducers/notificationReducer";

const Blog = ({ blog }) => {
  const user = useSelector((state) => state.user);

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

  const canRemove = user && blog.user.username === user.username;

  return (
    <>
      <h2>
        {blog.title} {blog.author}
      </h2>
      <div>
        <div>
          <a href={blog.url}> {blog.url}</a>{" "}
        </div>
        <div>
          likes {blog.likes} <button onClick={like}>like</button>
        </div>
        <div>Added by {blog.user?.name}</div>
        {canRemove && <button onClick={remove}>delete</button>}
      </div>
      <h3>comments</h3>

      <ul>
        {blog.comments.length > 0 ? (
          blog.comments.map((comment) => <li>{comment.content}</li>)
        ) : (
          <li>no comments yet</li>
        )}
      </ul>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
  }),
};

export default Blog;

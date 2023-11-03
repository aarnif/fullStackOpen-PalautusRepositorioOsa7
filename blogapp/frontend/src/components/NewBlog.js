import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../reducers/blogsReducer";
import { setNotification } from "../reducers/notificationReducer";

const BlogForm = ({ handleVisibility }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlogContent = { title, author, url };
    const addNewBlog = dispatch(addBlog(newBlogContent));
    dispatch(
      setNotification({
        message: `A new blog '${newBlogContent.title}' by '${newBlogContent.author}' added`,
        type: "info",
      })
    );
    handleVisibility();
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <div>
      <h4>Create a new blog</h4>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            id="title"
            placeholder="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            id="author"
            placeholder="author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url
          <input
            id="url"
            placeholder="url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default BlogForm;

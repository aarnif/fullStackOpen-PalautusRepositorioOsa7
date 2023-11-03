import { useEffect, useRef } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/Login";
import NewBlog from "./components/NewBlog";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "./reducers/notificationReducer";
import { inialitizeBlogs } from "./reducers/blogsReducer";
import { loadUser, logoutUser } from "./reducers/userReducer";

const App = () => {
  const blogs = [...useSelector((state) => state.blogs)];
  const user = useSelector((state) => state.user);
  const info = useSelector((state) => state.notification);

  const blogFormRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(inialitizeBlogs());
  }, [dispatch]);

  const logout = async () => {
    dispatch(logoutUser());
    dispatch(setNotification({ message: "logged out", type: "info" }));
  };

  if (!user) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification info={info} />
        <LoginForm />
      </div>
    );
  }

  const byLikes = (b1, b2) => b2.likes - b1.likes;

  return (
    <div>
      <h2>blogs</h2>
      <Notification info={info} />
      <div>
        {user.name} logged in
        <button onClick={logout}>logout</button>
      </div>
      <Togglable buttonLabel="new note" ref={blogFormRef}>
        <NewBlog
          handleVisibility={() => blogFormRef.current.toggleVisibility()}
        />
      </Togglable>
      <div>
        {blogs.sort(byLikes).map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            canRemove={user && blog.user.username === user.username}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

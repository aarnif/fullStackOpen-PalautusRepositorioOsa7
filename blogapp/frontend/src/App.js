import { useEffect, useRef } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/Login";
import Notification from "./components/Notification";
import { Routes, Route, useMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "./reducers/notificationReducer";
import { loadUser, logoutUser } from "./reducers/userReducer";
import { inialitizeBlogs } from "./reducers/blogsReducer";
import { inialitizeUsers } from "./reducers/usersReducer";
import Blogs from "./components/Blogs";
import Users from "./components/Users";
import User from "./components/User";

const App = () => {
  const user = useSelector((state) => state.user);
  const blogs = [...useSelector((state) => state.blogs)];
  const users = [...useSelector((state) => state.users)];
  const info = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  const matchUser = useMatch("/users/:id");
  const findUser = matchUser
    ? users.find((user) => user.id === matchUser.params.id)
    : null;

  const matchBlog = useMatch("/blogs/:id");
  const findBlog = matchBlog
    ? blogs.find((blog) => blog.id === matchBlog.params.id)
    : null;

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(inialitizeBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(inialitizeUsers());
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

  return (
    <div>
      <h2>blogs</h2>
      <Notification info={info} />
      <div>{user.name} logged in</div>
      <button style={{ marginTop: 10 }} onClick={logout}>
        logout
      </button>
      <Routes>
        <Route path="/blogs" element={<Blogs blogs={blogs} />}></Route>
        <Route path="/blogs/:id" element={<Blog blog={findBlog} />}></Route>
        <Route path="/users" element={<Users users={users} />}></Route>
        <Route path="/users/:id" element={<User user={findUser} />}></Route>
      </Routes>
    </div>
  );
};

export default App;

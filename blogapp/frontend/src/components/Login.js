import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/userReducer";
import { setNotification } from "../reducers/notificationReducer";

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(loginUser(username, password));
      dispatch(setNotification({ message: "welcome!", type: "info" }));
    } catch (error) {
      dispatch(
        setNotification({
          message: error.response.data.error,
          type: "error",
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        username
        <input
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id="login-button" type="submit">
        login
      </button>
    </form>
  );
};

export default LoginForm;

import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

const { setUsers } = usersSlice.actions;

export const inialitizeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import BlogService from "../services/blogs";

const initialState = [];

const notificationSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs(state, action) {
      console.log(action.payload);
      return action.payload;
    },
    appendBlog(state, action) {
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

const { setBlogs, appendBlog } = notificationSlice.actions;

export const inialitizeBlogs = () => {
  return async (dispatch) => {
    const blogs = await BlogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const addBlog = (newBlogContent) => {
  return async (dispatch) => {
    const newBlog = await BlogService.create(newBlogContent);
    dispatch(appendBlog(newBlog));
  };
};

export default notificationSlice.reducer;

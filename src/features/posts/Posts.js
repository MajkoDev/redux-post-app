import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "The official, opinionated, batteries-included toolset for efficient Redux development.",
  },
  {
    id: "2",
    title: "React Query",
    content:
      'Fetch, cache and update data in your React and React Native applications all without touching any "global state".',
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;

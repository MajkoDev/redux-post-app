import { createSlice, nanoid } from "@reduxjs/toolkit";

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
  reducers: {
    // function for receiving new data
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;

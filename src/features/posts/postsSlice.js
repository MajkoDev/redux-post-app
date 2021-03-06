import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"
 
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "The official, opinionated, batteries-included toolset for efficient Redux development.",
      date: sub(new Date(), {minutes: 10}).toISOString(),
      reactions:{
        thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
      }
  },
  {
    id: "2",
    title: "React Query",
    content:
      'Fetch, cache and update data in your React and React Native applications all without touching any "global state".',
      date: sub(new Date(), {minutes: 5}).toISOString(),
      reactions:{
        thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
      }

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
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions:{
              thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
            }
          },
        };
      },
    },
    reactionAdded(state, action){
      const {postId, reaction} = action.payload
      const existingPost = state.find(post => post.id === postId)
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

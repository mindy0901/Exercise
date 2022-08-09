import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../../constant/data";


const initialState = {
      posts: [
            {
                  name: datas[0].name, account: datas[0].account, content: datas[0].content
            },
            {
                  name: datas[1].name, account: datas[1].account, content: datas[1].content
            },
            {
                  name: datas[2].name, account: datas[2].account, content: datas[2].content
            },
      ],
      form: {
            name: datas[3].name, account: datas[3].account,
      },
}

const postSlice = createSlice({
      name: "post",
      initialState,
      reducers: {
            addPost: (state, action) => {
                  const newPost = { ...state.form, content: action.payload };
                  state.posts.unshift(newPost)
            },
            editPost: (state, action) => {
                  console.log(action.payload);
                  let index = state.posts.findIndex(x => x.account === action.payload.account);
                  console.log(index)
                  if (index !== -1)
                        state.posts[index].content = action.payload.form
            },
            deletePost: (state, action) => {
                  state.posts = state.posts.filter((post, index) => index !== action.payload)
            },
            reset: () => {
                  return initialState
            }
      }
})

export const { addPost, editPost, reset, deletePost } = postSlice.actions;
export default postSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, fetchTags } from "../services/postService";
import { deletePost } from "../services/postService";
import { editPost } from "../services/postService";
import api from "../api/api";

export const fetchPostsAsync = createAsyncThunk(
  "post/fetchPosts",
  async ({ page, title, tags }) => {
    const response = await fetchPosts({ page, title, tags });
    return response;
  }
);

export const fetchTagsAsync = createAsyncThunk("post/fetchTags", async () => {
  const response = await fetchTags();
  return response;
});

export const createPostAsync = createAsyncThunk(
  "posts/createPost",
  async ({ title, description, tags }) => {
    try {
      const response = await api.post("/posts", { title, description, tags });
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
export const deletePostAsync = createAsyncThunk(
  "post/deletePost",
  async (postId) => {
    await deletePost(postId);
    alert(`Xoá thành công post ${postId}`);
    return postId;
  }
);
export const updatePostAsync = createAsyncThunk(
  "posts/updatePost",
  async ({ postId, title, description, tags }) => {
    const response = await editPost({ postId, title, description, tags });
    return { ...response, id: postId };
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    totalPages: "",
    tags: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.posts;
        state.totalPages = action.payload.total_page;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = {
            ...state.posts[index],
            ...action.payload,
          };
        }
      })

      .addCase(fetchTagsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../services/authService";
import { jwtDecode } from "jwt-decode";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ username }) => {
    const response = await login(username);
    return response;
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await logout();
  return { accessToken: null, refreshToken: null, username: null };
});

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  username: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.username = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    loadingUserLogin(state, action) {
      const token = state.accessToken;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          username: user.username,
        };
      } else {
        return state;
      }
    },
    checkExpiredToken(state) {
      const token = state.refreshToken;
      if (token) {
        const user = jwtDecode(token);
        const exp = user.exp;
        const currentTime = Math.floor(Date.now() / 1000);
        if (exp < currentTime) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return {
            ...state,
            accessToken: null,
            refreshToken: null,
            username: "",
          };
        }
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        const user = jwtDecode(action.payload.accessToken);
        state.username = user.username; // Cập nhật username trong state
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.username = action.payload.username;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      });
  },
});

export const { logoutSuccess, loadingUserLogin, checkExpiredToken } =
  authSlice.actions;

export default authSlice.reducer;

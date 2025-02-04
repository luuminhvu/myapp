import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice, {
  checkExpiredToken,
  loadingUserLogin,
} from "./stores/authSlice";
import postSlice from "./stores/postSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postSlice,
  },
});
store.dispatch(checkExpiredToken());
store.dispatch(loadingUserLogin());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

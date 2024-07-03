import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../components/Icon/Logo";
import { loginAsync } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim() !== "") {
      setLoading(true);
      await dispatch(loginAsync({ username }));
      setLoading(false);
    } else {
      alert("Please enter your username.");
    }
  };

  useEffect(() => {
    if (auth.username) {
      navigate("/");
    }
  }, [auth.username, navigate]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="absolute top-6 left-[240px]">
        <Logo />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg">
        <h1 className="text-[64px] mb-8 text-center">Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInComponent;

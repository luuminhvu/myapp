import api from "../api/api";

export const login = async (username) => {
  try {
    const response = await api.post("/auth/login", { username });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const logout = async () => {
  return await api.delete("/auth/logout");
};
export const refreshTokenAsync = async () => {
  try {
    const response = await api.post("/auth/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

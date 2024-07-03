import api from "../api/api";

export const fetchTags = async () => {
  try {
    const response = await api.get("/posts/tags");
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchPosts = async ({ page, title, tags }) => {
  try {
    const params = { page };
    if (title) params.title = title;
    if (tags) params.tags = tags;

    const response = await api.get("/posts", { params });
    return response.data;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    throw err;
  }
};
export const deletePost = async (postId) => {
  try {
    await api.delete(`/posts/${postId}`);
  } catch (error) {
    throw new Error(`Failed to delete post: ${error.message}`);
  }
};
export const editPost = async ({ postId, title, description, tags }) => {
  try {
    const res = await api.patch(`/posts/${postId}`, {
      title,
      description,
      tags,
    });
    alert("Cập nhật thành công");
    return { ...res.data, id: postId };
  } catch (err) {
    throw err;
  }
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/Icon/Logo";
import {
  deletePostAsync,
  fetchPostsAsync,
  fetchTagsAsync,
} from "../../stores/postSlice";
import EditPostModal from "../../components/common/EditPostModal";
import AddPostModal from "../../components/common/AddPostModal";
import { logoutAsync } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postsData = useSelector((state) => state.posts.posts);
  const totalPages = useSelector((state) => state.posts.totalPages);
  const tags = useSelector((state) => state.posts.tags);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [choosenTag, setChoosenTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        await dispatch(fetchPostsAsync({ page, title, tags: choosenTag }));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [dispatch, page, title, choosenTag]);

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setChoosenTag(e.target.value);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="w-full md:w-[320px] bg-gray-200 p-4">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <ul className="p-8">
          <li className="mb-2 text-lg">Posts</li>
          <li
            onClick={async () => {
              await dispatch(logoutAsync());
              navigate("/");
            }}
            className="text-lg hover:cursor-pointer hover:bg-slate-500"
          >
            Logout
          </li>
        </ul>
      </div>

      <div className="w-full p-4 md:p-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4">
            <button
              onClick={() => {
                setShowAddModal(true);
              }}
              className="bg-purple-500 w-full md:w-[252px] text-white py-2 px-4 rounded-3xl"
            >
              Add new
            </button>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2 w-full md:w-[368px]"
              value={title}
              onChange={handleTitleChange}
            />
            <select
              className="border border-gray-300 p-2 rounded w-full md:w-[368px]"
              value={choosenTag}
              onChange={handleTagChange}
            >
              <option value="">Tags</option>
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        ) : (
          <table className="w-full border-collapse border bg-sidebarRgb border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-500 p-2">ID</th>
                <th className="border border-gray-500 p-2">Title</th>
                <th className="border border-gray-500 p-2">Description</th>
                <th className="border border-gray-500 p-2">Tags</th>
                <th className="border border-gray-500 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(postsData) && postsData.length > 0 ? (
                postsData.map((post) => (
                  <tr key={post.id} className="text-center">
                    <td className="border border-gray-500 p-2">{post.id}</td>
                    <td className="border border-gray-500 p-2">{post.title}</td>
                    <td className="border border-gray-500 p-2">
                      {post.description}
                    </td>
                    <td className="border border-gray-500 p-2">
                      {post.tags.join(", ")}
                    </td>
                    <td className="border border-gray-500 p-2">
                      <div className="flex justify-center items-center w-full h-full">
                        <button
                          onClick={() => {
                            setEditingPost(post);
                            setShowEditModal(true);
                          }}
                          className="text-black"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-pencil"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                          </svg>
                        </button>
                        <button
                          onClick={async () => {
                            setLoading(true);
                            await dispatch(deletePostAsync(post.id));
                            setLoading(false);
                          }}
                          className="text-black ml-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No posts available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <div className="mt-4 flex justify-end">
          <button
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="mx-2">{`Page ${page} of ${totalPages}`}</span>
          <button
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded ${
              page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
          {showEditModal && (
            <EditPostModal
              post={editingPost}
              onClose={() => setShowEditModal(false)}
            />
          )}
          {showAddModal && (
            <AddPostModal onClose={() => setShowAddModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

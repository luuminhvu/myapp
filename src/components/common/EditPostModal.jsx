import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePostAsync } from "../../stores/postSlice";

const EditPostModal = ({ post, onClose }) => {
  const tags = useSelector((state) => state.posts.tags);
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState({
    id: post.id,
    title: post.title,
    description: post.description,
    tags: post.tags,
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedTags(editedPost.tags);
  }, [editedPost.tags]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleTagSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedTagsArray = selectedOptions.map((option) => option.value);
    const updatedTags = [...editedPost.tags, ...selectedTagsArray];
    const uniqueTags = [...new Set(updatedTags)];
    setEditedPost({ ...editedPost, tags: uniqueTags });
    setSelectedTags(uniqueTags);
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
    setEditedPost({ ...editedPost, tags: updatedTags });
    setSelectedTags(updatedTags);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await dispatch(
        updatePostAsync({
          postId: editedPost.id,
          title: editedPost.title,
          description: editedPost.description,
          tags: selectedTags,
        })
      );
      onClose();
    } catch (error) {
      console.error("Failed to save post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 md:p-12 lg:p-16 rounded-lg z-10 w-full md:w-[600px] lg:w-[800px]">
        <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={editedPost.title}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 w-full rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={editedPost.description}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 w-full rounded"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    <span className="mr-2">{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="bg-transparent text-white font-bold py-1 px-2 rounded-full hover:bg-red-500 hover:text-white"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <select
                name="tags"
                value={editedPost.tags}
                onChange={handleTagSelectChange}
                className="border border-gray-300 p-4 w-full rounded mt-2"
                multiple
              >
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-6 rounded mr-4"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditPostModal;

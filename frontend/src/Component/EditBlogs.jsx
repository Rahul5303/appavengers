import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlogs, getBlogs } from "../Redux/actionCreator";

const EditBlogs = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    // Fetch the blog details based on the ID
    const blogToEdit = blogs.find((blog) => blog._id === id);
    if (blogToEdit) {
      setFormData(blogToEdit);
    }
  }, [id, blogs]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditBlog = () => {
    dispatch(editBlogs(id, formData)).then(() => {
      dispatch(getBlogs());
      navigate("/");
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleEditBlog}
      >
        Edit Blog
      </button>
    </div>
  );
};

export default EditBlogs;


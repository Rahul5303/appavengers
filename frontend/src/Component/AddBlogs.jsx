import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlogs, getBlogs } from '../Redux/actionCreator';
import { useNavigate } from 'react-router-dom';

const AddBlogs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddBlog = () => {
    dispatch(addBlogs(formData)).then(() => {
      // After adding the blog, trigger the onAddComplete callback
      // onAddComplete();
      dispatch(getBlogs());
      navigate("/");

    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <h1 className="text-2xl font-bold mb-2">Add Blog</h1>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />
      <label>Content:</label>
      <textarea name="content" onChange={handleInputChange}></textarea>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        onClick={handleAddBlog}
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlogs;

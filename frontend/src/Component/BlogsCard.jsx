import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlogs, getBlogs } from '../Redux/actionCreator';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteBlogs(_id)).then(() => {
      dispatch(getBlogs());
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700">{blog.content}</p>
      <div className="mt-4 flex items-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mr-2"
          onClick={() => handleDelete(blog._id)}
        >
          Delete Blog
        </button>
        <Link to={`/${blog._id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;

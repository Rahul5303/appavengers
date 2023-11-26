import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../Redux/actionCreator';
import BlogsCard from './BlogsCard';

const Blogs = () => {

  // for blogs to get data from blogs
  const blogs=useSelector((state)=>state.blogs);
  console.log(blogs);

  const dispatch = useDispatch();


  useEffect(() => {
    
      dispatch(getBlogs());
  }, []);

  console.log(blogs);




  return (
    <div>
      {blogs.length > 0 &&
        blogs.map((blog) => {
          return (
            <BlogsCard
              key={blog._id}
              blog={blog}
              
            />
          );
        })}
    </div>
  )
}

export default Blogs

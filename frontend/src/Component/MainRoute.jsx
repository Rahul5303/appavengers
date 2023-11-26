import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Blogs'
import EditBlogs from './EditBlogs'
import AddBlogs from './AddBlogs'

const MainRoute = () => {
  return (
    <div>
        {/* differnet routes to switch from home to edit page for routing used react-router-dom*/}
      <Routes>
        <Route path="/" element={<Blogs/>}/>
        <Route path="/add" element={<AddBlogs/>}/>
        <Route path="/:id" element={<EditBlogs />} />
      </Routes>
    </div>
  )
}

export default MainRoute

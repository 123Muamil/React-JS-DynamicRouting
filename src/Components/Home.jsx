import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Blog from './Blog'
import Details from './Details'
import MyBlog from './MyBlog'
const Home = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='/blog' element={<MyBlog/>}/>
      <Route path='/details/:id' element={<Details />}/>
      </Routes>
    </div>
  )
}

export default Home

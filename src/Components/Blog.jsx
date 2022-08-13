import React from 'react'
import {NavLink} from 'react-router-dom'
const Blog = () => {
  return (
    <div>
         <div className='text-center'>
            <h1>Dynamic Routing in React JS</h1>
        </div>
     <NavLink to='/blog'>Go to my blog</NavLink>
    </div>
  )
}

export default Blog

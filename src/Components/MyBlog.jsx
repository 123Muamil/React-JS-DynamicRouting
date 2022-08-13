import React, { useState } from 'react'
import blogData from '../Assests/Fakes/BlogApi'
import {NavLink} from 'react-router-dom'
const MyBlog = () => {
    const [data,setData]=useState(blogData)
  return (
    <div className='container' style={{paddingTop:"50px"}}>
      <div className='row'>
       {
         data.map((currentItem)=>{
            return( <div className='col-lg-4 col-md-6' key={currentItem.id}>
            <div className="card text-center">
      <img src={currentItem.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{currentItem.title}</h5>
        {/*<p className="card-text">{currentItem.disc}</p>*/}
        <button className='btn btn-primary'><NavLink to={`/details/${currentItem.id}`}  style={{color:'white',textDecoration:'none'}}>Read More</NavLink></button>
      </div>
    </div>
            </div>)
         })
       }
      </div>
    </div>
  )
}
export default MyBlog

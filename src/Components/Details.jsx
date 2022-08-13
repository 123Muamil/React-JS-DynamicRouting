import React, { useState } from 'react'
import blogData from '../Assests/Fakes/BlogApi'
//import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router-dom'
const Details = (props) => {
    const [data,setData]=useState(blogData)
     const {id}=useParams()//By Using useParams we get id that particular object
     console.log("The id is:",id)
     const getData=data[id-1]
     console.log("The Data at first index is:",getData)
  return (
    <div className='container' style={{paddingTop:"50px",alignItems:'center'}}>
            <div className="card text-center">
      <img src={getData.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{getData.title}</h5>
         <p className="card-text">{getData.disc}</p>
        <button className='btn btn-primary'>Read More</button>
           </div>
      </div>
    </div>
  )
}
export default Details

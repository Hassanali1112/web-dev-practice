import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <center> 
      Category
      
      <Link className='m-2' to='bike'>Bike</Link>
      <Link className='m-2' to='car'>Car</Link>
      <Outlet />    
      </center>  
    </div>

  )
}

export default Category

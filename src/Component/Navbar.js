import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly',backgroundColor:'green'}}>
       <Link to='/'> <p style={{color:'white'}}>Home</p></Link>
        <Link to='Contact'><p style={{color:'white'}}> Contact</p></Link>
        <Link to='About'><p style={{color:'white'}}> About </p></Link>
        <Link to='Services'><p style={{color:'white'}}> Services</p></Link>

    </div>
  )
}
export default Navbar
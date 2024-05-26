import React from 'react'

 const Contact = () => {
  return (
    <div>
      <h1 className='heading'>    Contact Us    </h1>
      <img src={'https://images.unsplash.com/photo-1583692717320-0c9661d49d9a?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}style={{height:'400px',width:'400px'}}/>

      <p className='nav'>Enter the email</p>
        <input type='email' id='search bar' placeholder='Type here'/>
        <p className='nav'>Enter the Phone Number</p>
        <input type='number' id='search bar' placeholder='Type here'/>
        <button className='btn'>
          Submit</button>
        
      
    </div>
  )
}
export default Contact
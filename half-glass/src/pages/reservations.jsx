import React, { Component } from 'react'
import Nav from '../components/nav'
import './reservatioins.css'
const Reservation =()=>
  {
    return (
      <div className='reservationmain'>
       
        <Nav/>
        
        <form action="" className='revform'>
        NAME: <input type="text" className='formone formitem'/>
        DATE AND TIME:<input type="text" className='formtwo formitem' /><br />
        PHONE NO:<input type="number" className='formthree formitem'/><br />
          <button className='button formitem'>Book</button>

        </form>
        
      </div>
    )
  }


export default Reservation
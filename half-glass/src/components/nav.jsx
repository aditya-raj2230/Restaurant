import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

import logo from './Screenshot_2024-03-02_171655-removebg-preview.png'
const Nav = ()=> {
    return (
      <div className='navBar'>
        <div className="navLeft">
        <img src={logo} alt="" className="logo" />
        </div>

        <div className="navRight">
          <Link to='/home' className="home navitem">Home</Link>
          <Link to='/menu' className="menu navitem">Menu</Link>
          <Link to='/contact' className="contact navitem">Contact</Link>
          <Link to='/reservation' className="reservation navitem">Reservation</Link>
          <Link to='/order' className="order navitem">Order</Link>
        </div>


        
      </div>
    )
  }


export default Nav

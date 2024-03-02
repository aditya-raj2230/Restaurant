import React, { Component } from 'react'
import Nav from '../components/nav'
import './home.css'
import logo from '../images/shake.png'

const Home = ()=> {
    return (
      <div className='main'>
        <Nav/>
      <div className="intro">
<h1 className="headerone">
<img src={logo} alt="" className="logo " />
WELCOME TO <img src={logo} alt="" className="logo " />
</h1>
<h1 className='headertwo'>
  HALF GLASS
  
</h1>

<h1 className="headerthree">
  Deliver DineIn Takeaway
</h1>

      </div>
      <div className="about">
        <div className="firstab abitem">

<p className='headab'> About Us</p><br />

Ace Gym is a leading fitness center located in the vibrant Kalyanpur area of Kanpur. <br />We are dedicated to helping individuals of all fitness levels achieve their health <br />and wellness goals
        </div>
        <div className="secondab abitem">

       <p className='headab'> Contact</p><br />

Address: Awas vikas , Kanpur <br />
Email: AceGym@example.com <br />
Phone: +1 234 567 890
        </div>
        <div className="thirdab abitem">
      <p className='headab'>  Links</p><br />

<a className='bio' href="http://localhost:3000/home">Home </a><br />
<a className='bio' href="">Facebook</a> <br />
<a className='bio' href="https://www.instagram.com/abhish3k_kumar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        </div>
        
        </div>

      </div>
    )
  }


export default Home

import React, { Component } from 'react'
import Nav from '../components/nav'
import './order.css'
import locphoto from '../images/halfglass.jpg'
import parking from '../images/parking.png'
const Order=()=> {
    return (
      <div className='ordermain'>
         <Nav/>
         <img src={locphoto} alt="" className="mainphoto" />
         <h2><b>Call us: </b><br /> 7656379279</h2>
         <h2><b>For General Enquiries</b><br />abhishekkumartuttu@gmail.com</h2>
         <h2><b>Find Us</b><br />Sector 81  chandigarh ,punjab </h2>
         <h2 className='timing'>
          <img src={parking} alt="" />
<h3 className="loweside">
    BRUNCH <br />
    SATURDAY – SUNDAY <br />
    10AM – 2:30PM <br /><br />

    LUNCH <br />
    WEEKDAYS <br />
    11:30AM – 2:30PM <br /><br />

    DINNER<br />
    SUNDAY – THURSDAY<br />
    5 – 10PM<br /><br />
    FRIDAY & SATURDAY<br />
    5 – 11PM<br /><br />

    HOLIDAY HOURS<br />
    DECEMBER 24-26, JANUARY 8-10<br />
    CLOSED<br/></h3><br />
</h2>


      </div>
    )
  }


export default Order

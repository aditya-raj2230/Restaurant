import React from 'react'
import Nav from '../components/nav'
import './menu.css'
import one from '../fooditemimg/burger.png'
import two from '../fooditemimg/french-fried.png'
import three from '../fooditemimg/pizza.png'
import four from '../fooditemimg/haka-noodles.png'
import five from '../fooditemimg/chicken-roll.png'
import six from '../fooditemimg/fish-fry.png'
import seven from '../fooditemimg/fried-chicken.png'
import eight from '../fooditemimg/fruid-salad.png'
import nine from '../fooditemimg/garlic-bread.png'
import ten from '../fooditemimg/lobster.png'
import eleven from '../fooditemimg/pasta.png'
import twelve from '../fooditemimg/prawn.png'
import thirteen from '../fooditemimg/samosa.png'
const Menu = ()=> {
    return (
      <div className='menumain'>
        
        <Nav/>
        
      <div className="fooditems">
        <div className="one food">
          <img src={one} alt="" className='foodimg' />
          <h1 className='itemname'>Veg Burger <h5>Aloo patty with tomato ,chillies,cucumber,onion</h5></h1>
        </div>
        <div className="two food">
        <h1 className='itemname'>FrenchFries <h5>sliced potato with chilliflakes and peri peri</h5></h1>
          <img src={two} alt="" className="foodimg" />
        </div>
        <div className="three food">
        <img src={three} alt="" className="foodimg" />
        <h1 className='itemname'>Pizza<h5>paneer ,onion ,capsicum and tomato <br /> regular 8 inches</h5></h1>
        </div>
        <div className="four food">
        <h1 className='itemname'>Haka Noodles<h5>capsicum , onion and cabbage with chilli flakes</h5></h1>
        <img src={four} alt="" className="foodimg" />
        </div>
        <div className="five food">
        <img src={five} alt="" className="foodimg" />
        <h1 className='itemname'>Chicken Roll<h5>4 chicken pieces with onion and tomato wrapped in a taco</h5></h1>
        </div>
        <div className="six food"><h1 className='itemname'>Fish Fry<h5>Fried fish belly in virgin olive olive</h5></h1><img src={six} alt="" className="foodimg" /></div>
        <div className="seven food"><img src={seven} alt="" className="foodimg" /><h1 className='itemname'>Fried Chicken<h5>8 piece bucket <br />server 2 ,crispy fried chicken</h5></h1></div>
        <div className="eight food"><h1 className='itemname'>Fruit Salad<h5>Apple, orange, grape, guava, watermelon and papaya</h5></h1><img src={eight} alt="" className="foodimg" /></div>
        <div className="nine food"><img src={nine} alt="" className="foodimg" /><h1 className='itemname'>Garlic Bread<h5> soft  delicious freshly baked garlic bread with mayo dips</h5></h1></div>
        <div className="ten food"><h1 className='itemname'>Lobster<h5>full boiled and salted fresh lobster</h5></h1><img src={ten} alt="" className="foodimg" /></div>
        <div className="eleven food"><img src={eleven} alt="" className="foodimg" /><h1 className='itemname'>Pasta<h5>white sauce pasta with capsicum and pepper</h5></h1></div>
        <div className="twelve food"><h1 className='itemname'>Prawn<h5>fresh salt water prawns <br />server 2 person</h5></h1><img src={twelve} alt="" className="foodimg" /></div>
        <div className="thirteen food"><img src={thirteen} alt="" className="foodimg" /><h1 className='itemname'>Samosa<h5>2 samosas with aloo and paneer stuffing</h5></h1></div>
      </div>
      </div>
    )
  }


export default Menu

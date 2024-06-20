import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

    const[menu,setmenu]=useState("shop");
    const {getTotalCartItems} =useContext(ShopContext)

  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt=''></img>
        <p>GOO SHOP</p>
      </div>
      <div className="nav-manu">
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
      </div>
      <div className="nav-login-cart">
        <Link to='/loginsignup'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=''></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
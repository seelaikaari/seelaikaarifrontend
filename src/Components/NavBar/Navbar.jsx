import React from 'react'
import {Link,NavLink} from "react-router-dom"
//Css
import "./NavBar.css"
//icons
import { FaRegUserCircle,FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart  } from "react-icons/md";
//images
import logo from "../../assets/images/logo-1.avif"
const Navbar = () => {
  return (
    <header>
        <nav className='nav-wrapper'>
            <div className="container nav-wrap-inner">
                <div className="row align-items-center">
                    <div className='col-md-4'>
                        <ul className='nav-ul-wrapper justify-content-start'>
                            <li className='nav-item'><NavLink to="/" className='nav-link'>Home</NavLink></li>
                            <li className='nav-item'><NavLink to="/Contact"  className='nav-link'>Contact</NavLink></li>
                            <li className='nav-item'><NavLink to="/About"  className='nav-link'>About</NavLink></li>
                            <li className='nav-item'><NavLink to="/Product"  className='nav-link'>Product</NavLink></li>
                        </ul>
                        <div className='d-none'>
                            <button className='nav-toggle-btn'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-4  d-flex justify-content-center'>
                        <Link to="/" className='text-center'><img src={logo} alt="" /></Link>
                    </div>
                    <div className='col-md-4 text-end'>
                        <ul className='nav-ul-wrapper justify-content-end'>
                            <li className='nav-item'><Link to="" className='nav-link'><FaRegUserCircle/></Link></li>
                            <li className='nav-item'><Link to="/Cart" className='nav-link'><MdOutlineShoppingCart/></Link></li>
                            <li className='nav-item'><a href="" className='nav-link'><FaRegHeart/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
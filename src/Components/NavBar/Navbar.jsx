
import {Link,NavLink} from "react-router-dom"
import { useState } from "react";

//Css
import "../NavBar/Navbar.css";

//icons
import { FaRegUserCircle,FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart  } from "react-icons/md";
import { IoClose } from "react-icons/io5";

//images
import logo from "../../assets/images/logo-2.avif"

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <header>
        <nav className='nav-wrapper'>
            <div className="container nav-wrap-inner">
                <div className="row align-items-center">
                    <div className='col-md-4 col-2'>
                        <div className={`bg-mask d-md-none  ${toggle?"d-block":"d-none"}`}></div>
                        <ul className={`nav-ul-wrapper justify-content-start mon-nav-ul ${toggle?"mob-toggles-show":""}`}>
                            <li className="mob-toggle-li d-md-none d-flex">
                                <Link to="/">
                                    <img src={logo} alt="logo" className="w-100" style={{height:"100px"}} />
                                </Link> 
                                <button className="mob-nav-close-btn" onClick={()=>setToggle(!toggle)}><IoClose/></button>
                            </li>
                            <li className='nav-item'><NavLink to="/" onClick={()=>setToggle(false)} className='nav-link'>Home</NavLink></li>
                            <li className='nav-item'><NavLink to="/Contact" onClick={()=>setToggle(false)}  className='nav-link'>Contact</NavLink></li>
                            <li className='nav-item'><NavLink to="/About" onClick={()=>setToggle(false)} className='nav-link'>About</NavLink></li>
                            <li className='nav-item'><NavLink to="/Product" onClick={()=>setToggle(false)} className='nav-link'>Product</NavLink></li>
                        </ul>
                        <div className='d-md-none d-block'>
                            <button className='nav-toggle-btn' onClick={()=>setToggle(!toggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-4 col-5 d-flex justify-content-center'>
                        <Link to="/" className='text-center'><img src={logo} alt="logo" className="w-100"  /></Link>
                    </div>
                   
                    <div className='col-md-4 col-5 text-end'>
                        <ul className='nav-ul-wrapper justify-content-end nav-c-icon'>
                            <li className='nav-item'><Link to="/login" className='nav-link'><FaRegUserCircle/></Link></li>
                            <li className='nav-item'><Link to="/Cart" className='nav-link prod-count'><MdOutlineShoppingCart/> <span className="prod-count-num">1</span></Link></li>
                            <li className='nav-item'><Link to="/Wishlist" className='nav-link  prod-count'><FaRegHeart/> <span className="prod-count-num">1</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    </header>
  )
}

export default Navbar
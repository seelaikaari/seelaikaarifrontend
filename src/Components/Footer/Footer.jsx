import React from 'react'
import {Link} from "react-router-dom"
//images
import logo from {}
import "./Footer.css"

const Footer = () => {
  return (
    <Footer>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footer
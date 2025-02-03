
import { Link } from "react-router-dom"
//images
import logo from "../../assets/images/icons/logo-1-w.png"
//icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//css
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="ft-row-1">
                <div className="container">
                        <div className="row row-gap-4">
                            <div className="col-md-5">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <ul className="footer-ul-l1">
                                    <li><IoLocationSharp/> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                    <li><FaPhoneAlt/> +91-000-000-0000</li>
                                    <li><MdEmail/>example@gmail.com</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4 className="title-ft">Quick Links</h4>
                                <ul className="ft-ul-wrapper">
                                    <li><Link className="ft-nav-link">Home</Link></li>
                                    <li><Link className="ft-nav-link">About</Link></li>
                                    <li><Link className="ft-nav-link">Contact</Link></li>
                                    <li><Link className="ft-nav-link">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div className="ft-row-2">
                <div className="container">
                    <h2 className="ft-copy">@Copyrights 2025</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer